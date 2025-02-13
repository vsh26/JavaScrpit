/*

    Primitive:
        - String
        - Numbers
            - Integer
            - Float
        - Boolean
        - Null
        - Undefined
        - Symbol
        - BigInt

    Non-Primitive
        - Array []
        - Object {}

    Declaration
        - let
        - const
        - var
*/

function printChai(n){
    console.log("Hello Chai", n);
    console.log("Hello,", n, "Chai");
}

function printCoffee(n){
    console.log(`Hello ${n} Coffee`);
}

function addTwo(a, b){
    console.log(a+b);
}

function mutliplyTwo(a, b){
    return a*b;
}

printChai(4);
printCoffee(10);
addTwo(10, 20);
mutliplyTwo(10*20);
console.log(mutliplyTwo(10, 40));
