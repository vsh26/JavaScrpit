/*

ARROW FUNCTIONS
    - compact alternative to write functions (=>)
    - not hoisted
    - inherits this from outer scope
    - arguments object not available
    - cannot be used as constructor

Traditional Functions
    - function keyword
    - hoisted
    - has its own this
    - arguments object available
    - can be used as constructor

*/

// Traditional Function
let traditionalHello = "";

traditionalHello = function(){
    return "Hello Traditional World";
}

console.log(traditionalHello());


// Arrow Function
let arrowHello = "";

arrowHello = () => {
    return "Hello Arrow World"
}

console.log(arrowHello());


subtraction = (a, b) => a - b;
console.log(subtraction(10, 5));

multiplication = (a, b) => a*b;
console.log(multiplication(10, 5));

division = (a, b) => a/b;
console.log(division(10, 5));

remainder = (a, b) => a%b;
console.log(remainder(10, 5));

tableGeneratorFunction = (num) => {
    for(let i = 1; i <= 10; i++){
        console.log(num*i);
    }
}

tableGeneratorFunction(10);