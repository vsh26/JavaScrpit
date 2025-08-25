// You just need to implement the hasDiscount function
function hasDiscount(product) {
  // Check if product has discount property
  if (typeof product !== "object" || !product.hasOwnProperty("discount")) {
    return false;
  }

  return true;
}
