// You just need to implement the getNestedValue function
function getNestedValue(obj, keyPath) {
  // Return the value from the nested object based on keyPath
  const pathArray = keyPath.split(".");

  for (let i = 0; i < pathArray.length; i++) {
    if (obj === null || obj[pathArray[i]] === undefined) {
      return "Key not found";
    }
    obj = obj[pathArray[i]];
  }

  return obj;
}
