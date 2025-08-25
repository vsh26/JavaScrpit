/*

Arrays are reference types in JavaScript.

When you assign an array to another variable using =,
    - it doesn't create a new copy of the array
    - it only copies the reference
    - both variables point to the same array in memory

*/

const arr1 = [1, 2, 3];
const arr2 = arr1;

// Both arr1 and arr2 refer to the same array

arr2.push(4);

console.log(arr1); // [1, 2, 3, 4]
console.log(arr2); // [1, 2, 3, 4]
