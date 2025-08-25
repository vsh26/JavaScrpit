// You just need to implement the removePassword function
function removePassword(user) {
  // Remove password property
  if (
    typeof user !== "object" ||
    user === null ||
    !user.hasOwnProperty("username") ||
    !user.hasOwnProperty("password")
  ) {
    return user;
  }

  delete user.password;
  return user;
}
