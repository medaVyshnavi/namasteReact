import { render, screen } from "@testing-library/react";
import Card from "../components/Card";
import cardData from "../mockData/cardMock";
import { PromotedCard } from "../components/Card";
import "@testing-library/jest-dom";

it("it should render restaurant component", () => {
  render(<Card data={cardData} />);

  //query
  const name = screen.getByText("Samosa Party");
  // assertion
  expect(name).toBeInTheDocument();
});
