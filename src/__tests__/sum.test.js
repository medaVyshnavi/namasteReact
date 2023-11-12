import sum from "../components/sum";

test("sum of 2", () => {
  const result = sum(3, 4);

  //Assertion
  expect(result).toBe(7);
});
