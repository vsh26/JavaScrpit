// Arrays

let cars = ["Mercedes", "BMW", "Audi", "Porsche"];
console.log(cars);


// Using Array constructor
let fruits = new Array("Apple", "Mango", "Grapes");
console.log(fruits);


// Arrays can hold any type: numbers, strings, objects, functions, even other arrays.
const mixed = [1, "hello", true, { name: "IronMan" }, [2, 3]];


// Objects
let person = {
    firstName: "Tony",
    lastName: "Stark",
    age: 50
};
console.log(person);


//Arrays are special type of objects
console.log(typeof cars);       // object
console.log(typeof fruits);     // object
console.log(typeof person);     // object


// Array.isArray() is used to check if given element is an array
console.log(Array.isArray(cars));       // true
console.log(Array.isArray(fruits));     // true
console.log(Array.isArray(person));     // false


// toString() - Converting array to string
const fruitString = fruits.toString();
console.log(fruitString);