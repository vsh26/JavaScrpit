// You need to implement the ShoppingCart constructor function and its prototype methods

function ShoppingCart() {
  // Initialize items property
  this.items = [];
}

// Define addItem method on ShoppingCart's prototype
if (!ShoppingCart.prototype.addItem) {
  ShoppingCart.prototype.addItem = function (price) {
    this.items.push(price);
  };
}

// Define getTotalPrice method on ShoppingCart's prototype
if (!ShoppingCart.prototype.getTotalPrice) {
  ShoppingCart.prototype.getTotalPrice = function () {
    const sum = this.items.reduce(function (accumulator, currentValue) {
      return accumulator + currentValue;
    }, 0);
    return sum;
  };
}
