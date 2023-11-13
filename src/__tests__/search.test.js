import Body from "../components/Body";
import { fireEvent, render, screen } from "@testing-library/react";
import fetchListMock from "../mockData/fetchListMock.json";
import "@testing-library/jest-dom";
import { act } from "react-dom/test-utils";
import { BrowserRouter } from "react-router-dom";

global.fetch = jest.fn(() => {
  return Promise.resolve({
    json: () => {
      return Promise.resolve(fetchListMock);
    },
  });
});

it("should render body component with search component for pizza search input", async () => {
  await act(async () =>
    render(
      <BrowserRouter>
        <Body />
      </BrowserRouter>
    )
  );

  const button = screen.getByRole("button", { name: "Search" });

  const searchInput = screen.getByTestId("searchInput");

  fireEvent.change(searchInput, { target: { value: "pizza" } });
  fireEvent.click(button);

  const cards = screen.getAllByTestId("resCard");
  expect(cards.length).toBe(3);
});

it("should render top rated retaurant", async () => {
  await act(async () =>
    render(
      <BrowserRouter>
        <Body />
      </BrowserRouter>
    )
  );

  const topRatedButton = screen.getByRole("button", {
    name: "Top Rated Restaurants",
  });

  fireEvent.click(topRatedButton);
  const items = screen.getAllByTestId("resCard");
  expect(items.length).toBe(6);
});
