import { capitalize, reverse, calculator } from "./index.js";

test("Capitalization", () => {
  expect(capitalize("brazil")).toBe("Brazil");
});

test("Reverse string", () => {
  expect(reverse("nordic")).toBe("cidron");
});

test("Calculator", () => {
  expect(calculator.add(1, 1)).toBe(2);
});
