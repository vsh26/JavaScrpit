let number = 42;        // Number
let text = "hello";     // String
let isTrue = true;      // Boolean
let nothing = null;     // Object (it is null, but typeof returns object)
let undefinedVar = undefined    // undefined
let symbol = Symbol()   // Symbol

// Conversion (String -> Number)

let num1 = "42";
let num2 = "42a"

let num1Conversion01 = Number(num1);
let num2Conversion01 = Number(num2);
let num1Conversion02 = +num1;
let num2Conversion02 = +num2;
let num1Conversion03 = parseInt(num1); 
let num2Conversion03 = parseInt(num2); 

console.log(num1Conversion01);              // 42
console.log(typeof num1Conversion01);       // number
console.log(num2Conversion01);              // NaN
console.log(typeof num2Conversion01);       // number
console.log(num1Conversion02);              // 42
console.log(typeof num1Conversion02);       // number
console.log(num2Conversion02);              // Nan
console.log(typeof num2Conversion02);       // number
console.log(num1Conversion03);              // 42
console.log(typeof num1Conversion03);       // number
console.log(num2Conversion03);              // 42
console.log(typeof num2Conversion03);       // number


// Conversion (Number -> String)

let num = 123;
let convertedStr = String(num);

console.log(convertedStr);          // 123
console.log(typeof convertedStr);   // string


// Arithmetic Operators

let a = 10;
let b = 3;

let sum = a + b;
let difference = a - b;
let product = a * b;
let quotient = a / b;
let remainder = a % b;
let power = a ** b;

// Comparision

let x = 10;
let y = "10";

console.log(x == y);    // true (checks for value)
console.log(x != y);    // false
console.log(x === y);   // false (checks for value as well as data-type)
console.log(x !== y);   // true
console.log(x < y);     // false
console.log(x <= y);    // true
console.log(x > y);     // false
console.log(x >= y);    // true


// Math library

// Mostly used Math functions
// Math.max(a, b)
// Math.min(a, b)
// Math.random()
// Math.floor(num)

console.log(Math.max(10, 5));       // 10
console.log(Math.min(10, 5));       // 5
console.log(Math.random());         // retruns random number between 0(inclusive) and 1(exclusive)
console.log((10*Math.random()));    // retruns random number between 0(inclusive) and 10(exclusive)

// Exa: create a function that returns a random number between 1 and 6
function diceFunction(){
    const result = Math.floor((6*Math.random())) + 1;
    return result;
}

console.log(diceFunction());

// Mostly used string functions
// .length
// .toUpperCase()
// .toLowerCase()
// .indexOf(str)
// .slice(start(I), end(NI))
