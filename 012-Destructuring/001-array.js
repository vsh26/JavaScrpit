// Destructuring is a feature in JavaScript that lets you unpack values from arrays or properties from objects into individual variables in a clean, readable way.


// Exa 1:
const [fisrtValue, secondValue] = [1, 2, 3, 4];

console.log(fisrtValue);    // 1
console.log(secondValue);   // 2


// Exa 2:
const arr = [10, 20, 30];
const [a, b, c] = arr;

console.log(a); // 10
console.log(b); // 20
console.log(c); // 30


// Exa 3: Skipping Values
const [x, , z] = [1, 2, 3];
console.log(x, z); // 1 3


// Exa 4: Default values
const [m = 1, n = 2] = [10];
console.log(m, n); // 10 2

// - [10] is an array with just one value at index 0 → 10
// m gets the value at index 0 → so m = 10
// n is supposed to get the value at index 1, but there is no index 1, so it's undefined
// But since you've given a default (n = 2), n becomes 2