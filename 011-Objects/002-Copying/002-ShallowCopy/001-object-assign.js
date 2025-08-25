/*
    Method 1: Object.assign()

    - Creates a shallow copy of the object
    - Top-level properties are copied
    - Nested objects are still referenced (not deeply copied)
*/

const obj1 = {
    name: "Thor",
    weapon: { type: "Hammer", name: "Mjolnir" }
};

const obj2 = Object.assign({}, obj1);

console.log(obj1); // Original
console.log(obj2); // Shallow copy

obj2.weapon.name = "Stormbreaker";  // Modifying nested object

console.log(obj1.weapon.name); // "Stormbreaker" — affected due to shallow copy
console.log(obj2.weapon.name); // "Stormbreaker"
