/* 

In JS string can be created using:

    - Double quotes:                " "
    - Single quote:                 ' '
    - Backticks/ Template literals: ` `
    - String constructor:           new String() - not recommended for normal use

*/


let car1 = "Mercedes";
let car2 = 'Bugatti';
let car3 = `BMW`;
let car4 = new String("Tesla");
console.log(typeof car1);   // string
console.log(typeof car2);   // string
console.log(typeof car3);   // string
console.log(typeof car4);   // object


/*
    Template String/ Template literal
        - supports string interpolation
        - supports multiline string
        
*/


// ---------- Multiline string ----------
let numOfCars = 10;
let str = `These
are cars. They are
amazingly fast. There are ${numOfCars} cars`;
console.log(str);


// ---------- String Interpolation ----------
const num = 5;
let numCars = `I have ${5} cars`;
console.log(numCars);


let str1 = "That is a 'car'";
let str2 = 'That is a "car"';
let myCar = "It\'s my car";

console.log(str1);
console.log(str2);
console.log(myCar);