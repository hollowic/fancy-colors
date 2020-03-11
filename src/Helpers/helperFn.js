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
