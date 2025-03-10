// You need to implement the Counter constructor function and its prototype methods

function Counter() {
  // Initialize count property
  this.count = 0;
}

// Define increment method on Counter's prototype
if (!Counter.prototype.increment) {
  Counter.prototype.increment = function () {
    this.count += 1;
    return this.count;
  };
}

// Define decrement method on Counter's prototype
if (!Counter.prototype.decrement) {
  Counter.prototype.decrement = function () {
    this.count -= 1;
    return this.count;
  };
}
