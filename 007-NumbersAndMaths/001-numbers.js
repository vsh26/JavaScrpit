// ---------- Primitive number ----------
const score = 400;
console.log(score);     // 400


// ---------- Number Object ----------
// (using Number constructor) - avoid, unless necessary
const balance = new Number(100);
console.log(balance);   // [Number: 100]

console.log(balance.toString().length);     // 3
console.log(balance.toFixed(1));             // 100.0

const otherNumber = 123.123456
console.log(otherNumber.toPrecision(4));   // 123.1 

const hundreds = 10000000000;
console.log(hundreds.toLocaleString());         // 10,000,000,000
console.log(hundreds.toLocaleString('en-IN'));  // 10,00,00,000

/*
    Some important functions:
    
        - toFixed()
        - toPrecision()
        - toLocaleString()
        - Number.MIN_VALUE
        - Number.MAX_VALUE
*/

// To learn more, check properties of Number