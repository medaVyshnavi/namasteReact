import { act } from "react-dom/test-utils";
import Menu from "../components/Menu";
import { fireEvent, render, screen } from "@testing-library/react";
import Menu_Mock from "../mockData/menuMock.json";
import "@testing-library/jest-dom";
import { Provider } from "react-redux";
import appStore from "../utils/appStore";
import Header from "../components/Header";
import Cart from "../components/Cart";
import { BrowserRouter } from "react-router-dom";

global.fetch = jest.fn(() => {
  return Promise.resolve({
    json: () => {
      return Promise.resolve(Menu_Mock);
    },
  });
});

it("should render menu component", async () => {
  await act(async () => {
    render(
      <BrowserRouter>
        <Provider store={appStore}>
          <Header />
          <Menu />
          <Cart />
        </Provider>
      </BrowserRouter>
    );
  });

  const selectedAccordian = screen.getByText("CHICKEN CHIZZA (5)");
  fireEvent.click(selectedAccordian);

  const itemLength = screen.getAllByTestId("itemList");
  expect(itemLength.length).toBe(5);

  const addBtn = screen.getAllByRole("button", { name: "Add +" });

  fireEvent.click(addBtn[0]);
  fireEvent.click(addBtn[1]);

  const cart = screen.getByText("2");
  expect(cart).toBeInTheDocument();

  const cartItem = screen.getAllByTestId("itemList");
  expect(cartItem.length).toBe(7);

  const clearCart = screen.getByRole("button", { name: "Clear cart" });
  fireEvent.click(clearCart);

  const itemAfterClearingCart = screen.getByText("0");
  expect(itemAfterClearingCart).toBeInTheDocument();
});
