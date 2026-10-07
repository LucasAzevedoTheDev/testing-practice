import { capitalize, reverse, calculator } from "./index.js";

test("Capitalization", () => {
  expect(capitalize("brazil")).toBe("Brazil");
});

test("Reverse string", () => {
  expect(reverse("nordic")).toBe("cidron");
});

describe("Calculator", () => {
  test("Add", () => {
    expect(calculator.add(1, 1)).toBe(2);
  });
  test("Subtract", () => {
    expect(calculator.subtract(2, 1)).toBe(1);
  });
});
