/*
    Method 3: Object.fromEntries()

    - Converts key-value pairs into an object
    - Can be used for shallow copy if paired with Object.entries()

    - Syntax:
        Object.assign(target, source);
*/

const obj1 = {
    hero: "Doctor Strange",
    gear: { item: "Cloak of Levitation", magic: true }
};

const obj2 = Object.fromEntries(Object.entries(obj1));

console.log(obj1);
console.log(obj2);

obj2.gear.item = "Eye of Agamotto";

console.log(obj1.gear.item); // "Eye of Agamotto" — original also changed
console.log(obj2.gear.item); // "Eye of Agamotto"
