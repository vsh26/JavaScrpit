// You just need to implement the convertTemperature function
function convertTemperature(value, scale) {
  // Convert temperature based on the scale ("C" to "F" or "F" to "C")
  let temp = null;
  let result;
  switch (scale) {
    case "C":
      temp = (1.8 * value + 32).toString();
      temp = temp.concat("\u00B0F");
      break;
    case "F":
      temp = ((value - 32) / 1.8).toString();
      temp = temp.concat("\u00B0C");
      break;
  }
  return temp;
}