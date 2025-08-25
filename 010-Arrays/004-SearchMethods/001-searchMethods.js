/*

- indexOf()
- lastIndexOf()

- includes()

- find()
- findIndex()
- findLast()
- findLastIndex()

*/


let cars = ["Mercedes", "BMW", "Audi", "Mercedes", "Land Rover", "Mercedes", "Jaguar", "Land Rover"];
console.log(cars);


// indexOf()
console.log(cars.indexOf("Mercedes"));      // First occurance of element
console.log(cars.indexOf("Mercedes", 1));   // First occurance of element after specified index
console.log(cars.indexOf("Tata"));          // Returns -1, if element is not found


// lastIndexOf()
console.log(cars.lastIndexOf("BMW"));      // Last occurance of element


// includes()
console.log(cars.includes("Land Rover"));   // true
console.log(cars.includes("Opel"));         // false


// find() - returns the value of the first array element that passes a test function
// findIndex() - returns the  index value of the first array element that passes a test function
// findLast() - starts searching at end, and returns the first array element (from last) that passes a test function
// findLastIndex() - starts searching at end, and returns the index of the first array element (from last) that passes a test function

let found = cars.find((element) => element === "Land Rover" );
let foundIndex = cars.findIndex((element) => element === "Land Rover");

console.log(found);
console.log(foundIndex);

const nums = [5, 12, 8, 130, 44];
found = nums.find((element) => element > 10);
foundIndex = nums.findIndex((element) => element > 10);
console.log(found);
console.log(foundIndex);

let foundLast = cars.findLast((element) => element === "Land Rover");
let foundLastIndex = cars.findLastIndex((element) => element === "Land Rover");
console.log(foundLast);
console.log(foundLastIndex);

foundLast = nums.findLast((element) => element > 10);
foundLastIndex = nums.findLastIndex((element) => element > 10);
console.log(foundLast);
console.log(foundLastIndex);