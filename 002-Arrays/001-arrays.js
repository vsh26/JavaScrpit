// Arrays

let cars = ["Mercedes", "BMW", "Audi", "Porsche"];
console.log(cars);

let fruits = new Array("Apple", "Mango", "Grapes");
console.log(fruits);

// Objects
let person = {
    firstName: "Tony",
    lastName: "Stark",
    age: 50
};
console.log(person);


//Arrays are special type of objects
console.log(typeof cars);
console.log(typeof fruits);
console.log(typeof person);

// Converting array to string
const fruitString = fruits.toString();
console.log(fruitString);