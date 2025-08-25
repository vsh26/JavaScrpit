// You just need to implement the countProperties function
function countProperties(user) {
  // Return the number of properties in user
  if (
    typeof user !== "object" ||
    user === null ||
    Object.keys(user).length <= 0
  ) {
    return 0;
  }
  const arr = Object.keys(user);
  return arr.length;
}
