// You just need to implement the addCarColor function
function addCarColor(car, color) {
  // Add color property to the car object
  if (
    typeof car !== "object" ||
    !car.hasOwnProperty("brand") ||
    !car.hasOwnProperty("model") ||
    typeof color !== "string" ||
    color === ""
  ) {
    return "Invalid color";
  }

  car.color = color;

  return car;
}
