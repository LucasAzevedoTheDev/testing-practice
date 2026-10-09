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

describe("Caesar Cipher", () => {
  test("Normal letters", () => {
    expect(caesarCipher("xyz", 3)).toBe("abc");
  });
  test("Uppercase letters", () => {
    expect(caesarCipher("heLLo", 3)).toBe("khOOr");
  });
  test("Punctuation", () => {
    expect(caesarCipher("Hello, World!", 3)).toBe("Khoor, Zruog!");
  });
});

describe("Analyze Array", () => {
  const object = analyzeArray([1, 8, 3, 4, 2, 6]);

  test("Average", () => {
    expect(object).toHaveProperty("average", 4);
  });
  test("Min", () => {
    expect(object).toHaveProperty("min", 1);
  });
  test("Max", () => {
    expect(object).toHaveProperty("max", 8);
  });
  test("Length", () => {
    expect(object).toHaveProperty("length", 6);
  });
});
