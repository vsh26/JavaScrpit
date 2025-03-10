// You just need to implement the cleanObject function
function cleanObject(obj) {
  // Remove all properties with null or undefined values
  if (typeof obj === "object" && obj !== null) {
    for (let property in obj) {
      if (obj[property] === null || typeof obj[property] === "undefined") {
        delete obj[property];
      }
    }

    if (Object.keys(obj) == []) {
      return {};
    }
  }

  return obj;
}
