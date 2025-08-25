/*
    Direct Assignment (=) — copying reference

    When you assign an object to another variable using =,
    - it doesn't create a new copy of the object
    - it only copies the reference
    - both variables point to the same object in memory
*/

const obj1 = { name: "IronMan", power: "Suit" };
const obj2 = obj1;  // Copies reference

console.log(obj1);  // { name: "IronMan", power: "Suit" }
console.log(obj2);  // { name: "IronMan", power: "Suit" }

obj2.power = "Nanotech";

console.log(obj1);  // { name: "IronMan", power: "Nanotech" }
console.log(obj2);  // { name: "IronMan", power: "Nanotech" }

// Changes to obj2 also reflect in obj1, because they both point to the same memory
