// Method 1: JSON.parse(JSON.stringify(arr))

const arr1 = [1, 2, 3];
const arr2 = JSON.parse(JSON.stringify(arr1));

console.log(arr1);  // [ 1, 2, 3]
console.log(arr2);  // [ 1, 2, 3]

arr2.push(4);

console.log(arr1);  // [ 1, 2, 3]
console.log(arr2);  // [ 1, 2, 3, 4]


// Deep copy of nested objects is also created

const arr3 = [1, [2, 3]];
const arr4 = JSON.parse(JSON.stringify(arr3));

console.log(arr3);  // [1, [2, 3]]
console.log(arr4);  // [1, [2, 3]]


arr4[1][0] = 99;

console.log(arr3);  // [1, [2, 3]]
console.log(arr4);  // [1, [99, 3]]


// Drawbacks:

// 1. undefined, functions, and symbols are lost

const obj = {
  name: "IronMan",
  age: undefined,
  greet: function () {
    console.log("Hi");
  },
  symbolKey: Symbol("id"),
};

const copy = JSON.parse(JSON.stringify(obj));
console.log(copy);      // { name: 'IronMan' }

// undefined, functions, and symbols are not valid JSON types. So they're omitted (removed) during conversion.


// 2. Circular reference

const obj1 = {};
obj1.self = obj1;

JSON.stringify(obj1); // TypeError: Converting circular structure to JSON

// JSON can’t handle circular structures. It tries to stringify infinitely, and crashes.
