// You need to implement the Employee constructor function and its prototype method

function Employee(name, position, salary) {
  // Initialize name, position, and salary properties
  this.name = name;
  this.position = position;
  this.salary = salary;
}

// Define applyBonus method on Employee's prototype
if (!Employee.prototype.applyBonus) {
  Employee.prototype.applyBonus = function (percent) {
    this.salary += (percent * this.salary) / 100;
  };
}
