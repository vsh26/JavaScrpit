/*

Conversion to number

    - Number()
    - +
    - parseInt()

*/


// ---------- String to Number ----------

let num1 = "42";
let num2 = "42a"

let num1Conversion01 = Number(num1);
let num1Conversion02 = +num1;
let num1Conversion03 = parseInt(num1);
 
let num2Conversion01 = Number(num2);
let num2Conversion02 = +num2;
let num2Conversion03 = parseInt(num2); 

console.log(num1Conversion01);              // 42
console.log(typeof num1Conversion01);       // number
console.log(num1Conversion02);              // 42
console.log(typeof num1Conversion02);       // number
console.log(num1Conversion03);              // 42
console.log(typeof num1Conversion03);       // number

console.log(num2Conversion01);              // NaN
console.log(typeof num2Conversion01);       // number
console.log(num2Conversion02);              // Nan
console.log(typeof num2Conversion02);       // number
console.log(num2Conversion03);              // 42
console.log(typeof num2Conversion03);       // number


// ---------- null to Number ----------

let a = null;

let aConversion01 = Number(a);
let aConversion02 = +a;
let aConversion03 = parseInt(a);

console.log(aConversion01);              // 0
console.log(typeof aConversion01);       // number
console.log(aConversion02);              // 0
console.log(typeof aConversion02);       // number
console.log(aConversion03);              // NaN
console.log(typeof aConversion03);       // number


// ---------- undefined to Number ----------

let b = undefined;

let bConversion01 = Number(b);
let bConversion02 = +b;
let bConversion03 = parseInt(b);

console.log(bConversion01);              // NaN
console.log(typeof bConversion01);       // number
console.log(bConversion02);              // NaN
console.log(typeof bConversion02);       // number
console.log(bConversion03);              // NaN
console.log(typeof bConversion03);       // number


// ---------- boolean to Number ----------

let c = true;
let d = false;

let cConversion01 = Number(c);
let cConversion02 = +c;
let cConversion03 = parseInt(c);

let dConversion01 = Number(d);
let dConversion02 = +d;
let dConversion03 = parseInt(d);

console.log(cConversion01);              // 1
console.log(typeof cConversion01);       // number
console.log(cConversion02);              // 1
console.log(typeof cConversion02);       // number
console.log(cConversion03);              // NaN
console.log(typeof cConversion03);       // number

console.log(dConversion01);              // 0
console.log(typeof dConversion01);       // number
console.log(dConversion02);              // 0
console.log(typeof dConversion02);       // number
console.log(dConversion03);              // NaN
console.log(typeof dConversion03);       // number
