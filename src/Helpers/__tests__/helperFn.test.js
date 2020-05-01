import {
  generateRandomHexValue,
  validateHexValue,
  hexToHsl,
  hexToRgb,
  rgbToHsl,
  rgbToHex,
  hslToRgb,
  hslToHex,
  rgbToHsv,
  hsvToRgb,
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

test("hexToHsl returns a valid HSL value, given a valid Hex value", () => {
  const HEX = "#A1D98C";
  const HSL = [104, 50, 70];
  console.log(hexToHsl(HEX));
  expect(hexToHsl(HEX)).toEqual(HSL);
});

test("hexToHsl returns a valid HSL value, given a valid Hex value", () => {
  const HEX = "#FA6E5C";
  const HSL = [7, 94, 67];
  expect(hexToHsl(HEX)).toEqual(HSL);
});

test("hexToRgb returns a valid RGB value, given a valid Hex value", () => {
  const HEX = "#A1D98C";
  const RGB = [161, 217, 140];
  expect(hexToRgb(HEX)).toEqual(RGB);
});

test("hexToRgb returns a valid RGB value, given a valid Hex value", () => {
  const HEX = "#FA6E5C";
  const RGB = [250, 110, 92];
  expect(hexToRgb(HEX)).toEqual(RGB);
});

test("rgbToHsl returns a valid HSL value, given a valid RGB value", () => {
  const RGB = "rgb(250,110,92)";
  const HSL = "hsl(7,94%,67%)";
  expect(rgbToHsl(RGB)).toBe(HSL);
});

test("rgbToHsl returns a valid HSL value, given a valid RGB value", () => {
  const RGB = "rgb(161,217,140)";
  const HSL = "hsl(104,50%,70%)";
  expect(rgbToHsl(RGB)).toBe(HSL);
});

test("rgbToHex returns a valid HEX value, given a valid RGB value", () => {
  const RGB = [161, 217, 140];
  const HEX = "#A1D98C";
  expect(rgbToHex(RGB).toUpperCase()).toBe(HEX);
});

test("rgbToHex returns a valid HEX value, given a valid RGB value", () => {
  const RGB = [250, 110, 92];
  const HEX = "#FA6E5C";
  expect(rgbToHex(RGB).toUpperCase()).toBe(HEX);
});

test("hslToRgb returns a valid RGB value, given a valid HSL value", () => {
  const HSL = "hsl(7,94%,67%)";
  const RGB = "rgb(250,110,92)";
  expect(hslToRgb(HSL)).toBe(RGB);
});

test("hslToRgb returns a valid RGB value, given a valid HSL value", () => {
  const HSL = "hsl(104,50%,70%)";
  const RGB = "rgb(161,217,140)";
  expect(hslToRgb(HSL)).toBe(RGB);
});

test("hslToRgb returns a valid RGB value, given a valid HSL value", () => {
  const HSL = "hsl(7,4%,7%)";
  const RGB = "rgb(19,17,17)";
  expect(hslToRgb(HSL)).toBe(RGB);
});

test("hslToHex returns a valid Hex value, given a valid HSL value", () => {
  const HSL = [255, 74, 77];
  const HEX = "#AF99F0";
  expect(hslToHex(HSL).toUpperCase()).toBe(HEX);
});
