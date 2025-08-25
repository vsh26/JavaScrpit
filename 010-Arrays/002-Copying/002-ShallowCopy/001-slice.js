// Method 1: slice() method

const arr1 = [1, 2, 3];
const arr2 = arr1.slice();

console.log(arr1);  // [ 1, 2, 3]
console.log(arr2);  // [ 1, 2, 3]

arr2.push(4);

console.log(arr1);  // [ 1, 2, 3]
console.log(arr2);  // [ 1, 2, 3, 4]


// Nested objects are copied by reference

const arr3 = [1, [2, 3]];
const arr4 = arr3.slice();

console.log(arr3);  // [1, [2, 3]]
console.log(arr4);  // [1, [2, 3]]


arr4[1][0] = 99;

console.log(arr3);  // [1, [99, 3]]
console.log(arr4);  // [1, [99, 3]]
