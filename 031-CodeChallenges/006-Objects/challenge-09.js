// You just need to implement the deepClone function
function deepClone(obj) {
  // Return a deep copy of obj

  if (typeof obj === "object" && obj !== null) {
    const objString = JSON.stringify(obj);
    const newObj = JSON.parse(objString);
    return newObj;
  }
}
