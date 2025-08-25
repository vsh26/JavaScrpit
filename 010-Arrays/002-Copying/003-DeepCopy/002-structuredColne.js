// Method 2: structuredClone()

const arr1 = [1, 2, 3];
const arr2 = structuredClone(arr1);

console.log(arr1);  // [ 1, 2, 3]
console.log(arr2);  // [ 1, 2, 3]

arr2.push(4);

console.log(arr1);  // [ 1, 2, 3]
console.log(arr2);  // [ 1, 2, 3, 4]


// Deep copy of nested objects is also created

const arr3 = [1, [2, 3]];
const arr4 = structuredClone(arr3);

console.log(arr3);  // [1, [2, 3]]
console.log(arr4);  // [1, [2, 3]]


arr4[1][0] = 99;

console.log(arr3);  // [1, [2, 3]]
console.log(arr4);  // [1, [99, 3]]


// Works with circular reference

const obj = {
  name: "IronMan"
};

obj.self = obj; // circular reference


// Use structuredClone() to deep copy
const objCopy = structuredClone(obj);

console.log(objCopy.name);         // "IronMan"
console.log(objCopy === obj);      // false (it's a new object)
console.log(objCopy.self === objCopy); // true (still circular, but safely cloned)


// Drawbacks:

// 1. undefined, functions, and symbols are lost
const obj1 = {
  name: "IronMan",
  age: undefined,
  greet: function () {
    console.log("Hi");
  },
  symbolKey: Symbol("id"),
};

const obj1Copy = structuredClone(obj1);  // Uncaught DataCloneError: function could not be cloned.
console.log(obj1Copy); 