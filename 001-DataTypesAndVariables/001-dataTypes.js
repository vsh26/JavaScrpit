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

    Non-Primitive:
        - Array []
        - Object {}

    Declaration:
        - let
        - const
        - var   (avoid using var - issue in block scope and functional scope)

*/

let number = 42;        // Number
let text = "hello";     // String
let isTrue = true;      // Boolean
let nothing = null;     // Object (it is null, but typeof returns object)
let undefinedVar = undefined    // undefined
let symbol = Symbol()   // Symbol

let cars = ["Mercedes", "BMW", "Audi", "Porsche"];  // Array (typeof returns object)

// Object

let person = {
    firstName: "Tony",
    lastName: "Stark",
    age: 50
};