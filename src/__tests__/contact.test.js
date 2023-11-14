import { render, screen } from "@testing-library/react";
import ContactUs from "../components/ContactUs";
import "@testing-library/jest-dom";

describe("multiple test case", () => {
  beforeAll(() => {
    console.log("before test cases");
  });

  // beforeEach(() => {
  //   console.log("before each and every test case");
  // });

  // afterAll(() => {
  //   console.log("after test cases");
  // });

  // afterEach(() => {
  //   console.log("after each and every test case");
  // });

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
