// You just need to implement the findLargest function
function findLargest(a, b, c) {
  // Return the largest among a, b, and c
  if (a > b) {
    if (a > c) {
      return a;
    } else {
      return c;
    }
  } else {
    if (b > c) {
      return b;
    } else {
      return c;
    }
  }
}