/*

    every() method checks if all the array values pass a test

*/

const numbers = [45, 4, 9, 16, 25];

const ifAllGreaterThan10 = numbers.every( num => num > 10);
console.log(ifAllGreaterThan10);

const ifAllLesserThan100 = numbers.every( num => num < 100);
console.log(ifAllLesserThan100);

