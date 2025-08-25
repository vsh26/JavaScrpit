// You just need to implement the objectToArray function
function objectToArray(obj) {
  // Convert the object into an array of key-value pairs
  if (typeof obj == "object") {
    return Object.entries(obj);
  }
}
