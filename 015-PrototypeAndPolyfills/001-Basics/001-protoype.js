/* 

Prototype Basics:

    - In JavaScript, a prototype is a hidden object that other objects inherit properties and methods from.

    -  Every object has an internal link to another object called its prototype. This forms a chain known as the prototype chain.

    - The prototype is like a blueprint or a fallback object: if a property or method is not found directly on the object, JavaScript looks for it in the prototype chain.

    - Exa: Instead of copying a method into every array or object, JavaScript lets all arrays share common methods via Array.prototype

*/

// Array.prototype is the prototype shared by all arrays

console.log(Array.prototype);

const arr = [1,2,3];

console.log(arr.__proto__); // arr.__proto__ points to Array.prototype
// OR
Object.getPrototypeOf(arr); // Object.getPrototypeOf(arr); points to Array.prototype


// Adding custom method to Array Prototype (shared by all arrays)
Array.prototype.ironMan = function(){
    return "I am Iron Man";
}

const res = arr.ironMan();
console.log(res);
