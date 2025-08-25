// You just need to implement the createStudentProfile function
function createStudentProfile(name, age, grade) {
  // Return an object with name, age, and grade
  if (
    typeof name !== "string" ||
    name === "" ||
    typeof age !== "number" ||
    age <= 5 ||
    typeof grade !== "string"
  ) {
    return "Invalid input";
  } else {
    return { name, age, grade };
  }
}
