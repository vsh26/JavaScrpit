// Method 4: Array.from() method

const arr1 = [1, 2, 3];
const arr2 = Array.from(arr1);

console.log(arr1);  // [ 1, 2, 3]
console.log(arr2);  // [ 1, 2, 3]

arr2.push(4);

console.log(arr1);  // [ 1, 2, 3]
console.log(arr2);  // [ 1, 2, 3, 4]


// Nested objects are copied by reference

const arr3 = [1, [2, 3]];
const arr4 = Array.from(arr3);

console.log(arr3);  // [1, [2, 3]]
console.log(arr4);  // [1, [2, 3]]


arr4[1][0] = 99;

console.log(arr3);  // [1, [99, 3]]
console.log(arr4);
