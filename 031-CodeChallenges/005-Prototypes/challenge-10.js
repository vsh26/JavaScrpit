// You need to implement the Product constructor function and its prototype methods

function Product(name, price, stock) {
  // Initialize name, price, and stock properties
  this.name = name;
  this.price = price;
  this.stock = stock;
}

// Define applyDiscount method on Product's prototype
if (!Product.prototype.applyDiscount) {
  Product.prototype.applyDiscount = function (percent) {
    this.price = Math.round(this.price - (percent * this.price) / 100);
  };
}
// Define purchase method on Product's prototype
if (!Product.prototype.purchase) {
  Product.prototype.purchase = function (quantity) {
    if (this.stock !== 0 && this.stock >= quantity) {
      this.stock = this.stock - quantity;
      return this.stock;
    } else {
      return "Not enough stock";
    }
  };
}
