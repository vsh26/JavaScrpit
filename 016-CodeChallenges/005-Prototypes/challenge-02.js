// You need to implement the Robot constructor function and its prototype method

function Robot(name, batteryLevel) {
  // Initialize name and batteryLevel properties
  this.name = name;
  this.batteryLevel = batteryLevel;
}

// Define charge method on Robot's prototype
if (!Robot.prototype.charge) {
  Robot.prototype.charge = function () {
    if (this.batteryLevel + 20 <= 100) {
      this.batteryLevel += 20;
      return this.batteryLevel;
    } else {
      this.batteryLevel = 100;
      return this.batteryLevel;
    }
  };
}
