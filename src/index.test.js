import { capitalize, reverse, calculator, caesarCipher } from "./index.js";

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
  test("Divide", () => {
    expect(calculator.divide(10, 5)).toBe(2);
  });
  test("Multiply", () => {
    expect(calculator.multiply(2, 5)).toBe(10);
  });
});

test("Caesar cipher", () => {
  expect(caesarCipher("banana", 3)).toBe("edqdqd");
});
