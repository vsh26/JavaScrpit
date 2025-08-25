/*
    Method 2: structuredClone()

    - Deep copies regular objects and nested structures
    - Supports circular references
    - Does not preserve functions or symbols
    - Throws an error if cloning fails due to unsupported data types
*/

// Example 1:

const original = {
    name: "Natasha",
    skills: ["Espionage", "Martial Arts"],
    gear: { weapon: "Batons", suit: "Black" }
};

const copy = structuredClone(original);

// Modify copy to check independence
copy.skills.push("Hacking");
copy.gear.weapon = "Guns";

console.log("Original:", original);
console.log("Copy:", copy);


// Example 2: Circular reference

const hero = { name: "Natasha" };
hero.self = hero;

const heroClone = structuredClone(hero);

console.log(heroClone.name);             // "Natasha"
console.log(heroClone === hero);         // false
console.log(heroClone.self === heroClone); // true
