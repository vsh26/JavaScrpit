/*
    Method 2: Spread Operator (...)

    - Similar to Object.assign()
    - Performs a shallow copy
    - Nested objects or arrays are still shared by reference
*/

const obj1 = {
    name: "Hulk",
    strength: { level: "High", rage: "Max" }
};

const obj2 = { ...obj1 };

console.log(obj1); // Original
console.log(obj2); // Shallow copy

obj2.strength.level = "Medium";

console.log(obj1.strength.level); // "Medium" — original also changed
console.log(obj2.strength.level); // "Medium"
