import { generateRandomHexValue, validateHexValue } from "../helperFn";

test("validateHexValue returns a false given String(zzz)", () => {
  const invalidHexValue = "zzz";
  expect(validateHexValue(invalidHexValue)).toBe(false);
});

test("validateHexValue returns a true given String(#ABCDEF)", () => {
  const validHexValue = "#ABCDEF";
  expect(validateHexValue(validHexValue)).toBe(true);
});

test("generateRandomHexValue returns a valid hex value", () => {
  const result = generateRandomHexValue();
  expect(validateHexValue(result)).toBe(true);
});
