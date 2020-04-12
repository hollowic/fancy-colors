import {
  generateRandomHexValue,
  validateHexValue,
  HexToHSL,
  HexToRGB,
  RGBToHSL,
  RGBToHex,
  HSLToRGB,
  HSLToHex,
} from "../helperFn";

test("validateHexValue returns a false given String(zzz)", () => {
  const invalidHexValue = "zzz";
  expect(validateHexValue(invalidHexValue)).toBe(false);
});

test("validateHexValue returns a false given String(zzz)", () => {
  const invalidHexValue = "#34z";
  expect(validateHexValue(invalidHexValue)).toBe(false);
});

test("validateHexValue returns a true given String(#ABCDEF)", () => {
  const validHexValue = "#ABCDEF";
  expect(validateHexValue(validHexValue)).toBe(true);
});

test("validateHexValue returns a true given String(#ABCDEF)", () => {
  const validHexValue = "AB8D5F";
  expect(validateHexValue(validHexValue)).toBe(true);
});

test("generateRandomHexValue returns a valid hex value", () => {
  const result = generateRandomHexValue();
  expect(validateHexValue(result)).toBe(true);
});

test("HexToHSL returns a valid HSL value, given a valid Hex value", () => {
  const HEX = "#A1D98C";
  const HSL = "hsl(104,50%,70%)";
  expect(HexToHSL(HEX)).toBe(HSL);
});

test("HexToHSL returns a valid HSL value, given a valid Hex value", () => {
  const HEX = "#FA6E5C";
  const HSL = "hsl(7,94%,67%)";
  expect(HexToHSL(HEX)).toBe(HSL);
});

test("HexToRGB returns a valid RGB value, given a valid Hex value", () => {
  const HEX = "#A1D98C";
  const RGB = "rgb(161,217,140)";
  expect(HexToRGB(HEX)).toBe(RGB);
});

test("HexToRGB returns a valid RGB value, given a valid Hex value", () => {
  const HEX = "#FA6E5C";
  const RGB = "rgb(250,110,92)";
  expect(HexToRGB(HEX)).toBe(RGB);
});

test("RGBToHSL returns a valid HSL value, given a valid RGB value", () => {
  const RGB = "rgb(250,110,92)";
  const HSL = "hsl(7,94%,67%)";
  expect(RGBToHSL(RGB)).toBe(HSL);
});

test("RGBToHSL returns a valid HSL value, given a valid RGB value", () => {
  const RGB = "rgb(161,217,140)";
  const HSL = "hsl(104,50%,70%)";
  expect(RGBToHSL(RGB)).toBe(HSL);
});

test("RGBToHEX returns a valid HEX value, given a valid RGB value", () => {
  const RGB = "rgb(161,217,140)";
  const HEX = "#A1D98C";
  expect(RGBToHex(RGB)).toBe(HEX);
});

test("RGBToHEX returns a valid HEX value, given a valid RGB value", () => {
  const RGB = "rgb(250,110,92)";
  const HEX = "#FA6E5C";
  expect(RGBToHex(RGB)).toBe(HEX);
});

test("HSLToRGB returns a valid RGB value, given a valid HSL value", () => {
  const HSL = "hsl(7,94%,67%)";
  const RGB = "rgb(250,110,92)";
  expect(HSLToRGB(HSL)).toBe(RGB);
});

test("HSLToRGB returns a valid RGB value, given a valid HSL value", () => {
  const HSL = "hsl(104,50%,70%)";
  const RGB = "rgb(161,217,140)";
  expect(HSLToRGB(HSL)).toBe(RGB);
});

test("HSLToRGB returns a valid RGB value, given a valid HSL value", () => {
  const HSL = "hsl(7,4%,7%)";
  const RGB = "rgb(19,17,17)";
  expect(HSLToRGB(HSL)).toBe(RGB);
});

test("HSLToHex returns a valid Hex value, given a valid HSL value", () => {
  const HSL = "hsl(255,74%,77%)";
  const HEX = "#AF99F0";
  expect(HSLToHex(HSL)).toBe(HEX);
});
