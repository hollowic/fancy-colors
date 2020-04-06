//Random Hex value
const generateRandomHexValue = () => {
  const hex =
    "#" +
    Math.floor(Math.random() * 16777217) //16777216 possible colors according to google
      .toString(16)
      .toUpperCase();
  return hex.padEnd(7, "0");
};
exports.generateRandomHexValue = generateRandomHexValue;

//Validate Hex value
const validateHexValue = input => {
  if (input.length < 7 && input[0] !== "#") {
    input = "#" + input;
  }
  return /^#([0-9A-F]{3}){1,2}$/i.test(input);
};
