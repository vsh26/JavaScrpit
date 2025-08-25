/*
    Method 1: JSON.parse(JSON.stringify(obj))

    - Simple way to deep copy an object
    - Nested objects are also copied
    - Cannot copy functions, symbols, or undefined
    - Fails on circular references
*/

const original = {
    name: "Tony",
    weapon: { type: "Suit", poweredBy: "Arc Reactor" },
    greet: function () { console.log("Hi"); },
    id: Symbol("hero"),
    age: undefined,
};

const copy = JSON.parse(JSON.stringify(original));

console.log(copy);
// Output: { name: 'Tony', weapon: { type: 'Suit', poweredBy: 'Arc Reactor' } }
// Note: `greet`, `id`, and `age` are lost.
