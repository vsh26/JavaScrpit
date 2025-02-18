function addition(a, b){
    return a + b;
}

// a, b are parameters of the function

// 10, 5 are arguments passed into the function
let sum = addition(10, 5);
console.log(sum);

// Arrow functions -> compact alternative to write functions

let traditionalHello = "";

traditionalHello = function(){
    return "Hello Traditional World";
}

console.log(traditionalHello());


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


// Other different ways to declare function

// Anonymous Function - Function without name

const difference = function (a, b){ return a -b };
console.log(10, 5);

// Defining function with function constructor
const myFunction = new Function ("a","b", "return a*b");

// Self-invoking function
(function(){
    console.log("This is a self invoking function");
})();

// arguments.length - length of arguments received when function was invloked
// This is due to the fact that JS functions have a built-in object called arguments object. It contains an array of argumnets used when the function was invoked

function test1(a, b){

    for(i of arguments){
        console.log(i);
    }

    return arguments.length;
}
console.log(test1(1, 1));

// toString() - returns function as string
console.log(test1.toString());

// Function Rest Parameter - allows the function to treat an indefinite number of arguments as an array
function test2(...args){
    let sum = 0;

    for(let arg of args){
        sum += arg;
    }
    return sum;
}

console.log(test2(1,2,3,4,5));

// Arguments are passed by value
// Objects are passed by reference


// Function Call
// call() method is used to invoke a method with an object as argument

const person = {
    fullName : function(){
        return this.firstName + " " + this.lastName;
    },
    fullInfo : function(city, country){
        return this.firstName + " " + this.lastName + ", " + city + ", " + country;
    } 
};

const person1 = {
    firstName: "Tony",
    lastName : "Stark"
}

const person2 = {
    firstName: "Bruce",
    lastName: "Banner"
}

console.log(person.fullName.call(person1));
// We can also pass arguments seperately in call() method
console.log(person.fullInfo.call(person1, "New York", "USA"));


// Function Apply
// apply() - similar to call, but instead of taking arguments seperately, it takes arguments as an array

console.log(person.fullName.apply(person1));
console.log(person.fullInfo.apply(person1, ["Sydney", "AUS"]));


// Function Bind
// bind() - an object can borrow a method from another object
// It returns a new funtion

const shieldAgent = {
    fName: "Phil",
    lName: "Coulson",
    fullName: function(){
        return this.fName + " " + this.lName;
    },
    printFullName : function(){
        console.log(this.fName + " " + this.lName);
    }
}

const hydraAgent = {
    fName: "Grant",
    lName: "Ward"
}

let result = shieldAgent.fullName.bind(hydraAgent);
console.log(result());

// bind() method has to be used to prevent losing this
// When a function is used as a callback, this is lost

shieldAgent.printFullName();                    // Phil Coulson
setTimeout(shieldAgent.printFullName, 3000);    // undefined undefined (this is lost)
setTimeout(shieldAgent.printFullName.bind(shieldAgent), 3000); // Phil Coulson (this is preserved)


/*
    Undeclared variables (created without a keyword var, let, const), are always global, even if they are created inside a function.

    function myFunction() {
        a = 4;
    }

    Here, a is a global variable
*/


// Nested Functions

function add() {
    let counter = 0;
    function plus(){
        return counter += 1;
    }
    plus();   
    return counter;
}

console.log(add());

// JavaScript Clousure -  A counter dilemma (https://www.w3schools.com/js/js_function_closures.asp)

// Higher Order Functions - Passing Functions as parameters

/* 
    Exa: Write a function named `processTeaOrder` that takes another function, `makeTea`, as a parameter and calls it with the argument `"earl grey"`. 
    Return the result of calling `makeTea`.
*/

function makeTea(teaType){
  return teaType;
}

function processTeaOrder(teaFunction){
  return teaFunction("earl grey");
}

const res = processTeaOrder(makeTea);
console.log(res);
