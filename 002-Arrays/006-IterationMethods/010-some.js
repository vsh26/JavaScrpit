/*

    some() method checks if if some array values pass a test

*/

const numbers = [45, 4, 9, 16, 25];

const ifSomeGreaterThan10 = numbers.some( num => num > 10);
console.log(ifSomeGreaterThan10);

const ifSomeLesserThan0 = numbers.some( num => num < 0);
console.log(ifSomeLesserThan0);