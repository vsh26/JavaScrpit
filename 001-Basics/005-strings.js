let car1 = "Mercedes";
let car2 = 'Bugatti';
console.log(typeof car1);
console.log(typeof car2);

// Strings can also be defined as objects
let car3 = new String("Land Rover");
console.log(typeof car3);

let str1 = "That is a 'car'";
let str2 = 'That is a "car"';

// Template String/ Template literal
let numOfCars = 10;
let str = `These
are cars. They are
amazingly fast. There are ${numOfCars} cars`;

let myCar = "It\'s my car";

const num = 5;
// String Interpolation
let numCars = `I have ${5} cars`;

console.log(car1);
console.log(car2);
console.log(car3);
console.log(str1);
console.log(str2);
console.log(str);
console.log(myCar);
console.log(numCars)