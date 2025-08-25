/*

apply() - similar to call (used to call a function, explicitly set vale of this), but instead of taking arguments seperately, it takes arguments as an array.


Syntax:
  func.apply(thisArg, [arg1, arg2, ...])

Summary:
  - Invoke a function immediately
  - Explicitly set what this refers to
  - Pass arguments as an array
  - Returns the result of the original function

*/

// Exa 1:
const person = {
  fullInfo: function (city, country) {
    return this.firstName + " " + this.lastName + ", " + city + ", " + country;
  }
};

const person1 = {
  firstName: "Bruce",
  lastName: "Banner"
};

console.log(person.fullInfo.apply(person1, ["New York", "USA"]));   //Bruce Banner, New York, USA


// Exa 2:
const nums = [3, 8, 2, 10];

// apply() spreads the array
const max = Math.max.apply(null, nums);  // null because Math.max doesn’t use 'this'
console.log(max); // 10

// We cannot do:
// const max1 = Math.max(nums);
// console.log(max1);
// Math.max() does not accept an array as a single argument
// It expects individual numbers

// But we can also do
const max2 = Math.max(...nums);
console.log(max2);  // 10