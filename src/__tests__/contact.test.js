import { render, screen } from "@testing-library/react";
import ContactUs from "../components/ContactUs";
import "@testing-library/jest-dom";

describe("multiple test case", () => {
  test("check if contact page is rendered", () => {
    render(<ContactUs />);

    const heading = screen.getByRole("heading");

    //Assertion
    expect(heading).toBeInTheDocument();
  });

  it("check button rendered", () => {
    render(<ContactUs />);

    const button = screen.getByText("Submit");

    expect(button).toBeInTheDocument();
  });

  it("get all inputs", () => {
    render(<ContactUs />);

    const input = screen.getAllByRole("textbox");

    expect(input.length).toBe(2);
  });
});
