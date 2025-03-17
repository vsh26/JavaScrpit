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

// Arrays are references

const arr1 = [1, 2, 3];
const arr2 = arr1;

arr2.push(4);
console.log(arr1);  // [ 1, 2, 3, 4 ]
console.log(arr2);  // [ 1, 2, 3, 4 ]

const arr3 = [1, 2, 3];
const arr4 = arr3.slice();

arr4.push(4);
console.log(arr3);  // [ 1, 2, 3]
console.log(arr4);  // [ 1, 2, 3, 4 ]


// Destructuring

const [fisrtValue, secondValue] = [1, 2, 3, 4];

console.log(fisrtValue);    // 1
console.log(secondValue);   // 2