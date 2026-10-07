import { capitalize, reverse } from "./index.js";

test("Capitalization", () => {
  expect(capitalize("brazil")).toBe("Brazil");
});

test("Reverse string", () => {
  expect(reverse("nordic")).toBe("cidron");
});
