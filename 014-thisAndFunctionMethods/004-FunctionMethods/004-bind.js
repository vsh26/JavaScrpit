/*

bind() - creates a new function with the 'this' value permanently set to a specific object.

Syntax:
    func.bind(thisArg, arg1, arg2, ...)

Summary:
    - Does NOT invoke the function immediately
    - It returns a new function (a copy of the original function) with fixed 'this'.
    - It’s used to preserve the this context of a function.
        - Helps when 'this' is lost (e.g., in callbacks or detached functions)

*/


// Exa 1: Fixing lost `this`
const tony = {
  name: "Tony Stark",
  greet: function () {
    console.log("Hi, I am " + this.name);
  }
};

// Problem:
const sayHI = tony.greet;
sayHI();    // Hi, I am undefined

// Solution: Save a copy
const sayHi = tony.greet.bind(tony);
sayHi();    // Hi, I am Tony Stark


// Exa 2: Partial application
function multiply(a, b) {
  return a * b;
}

const double = multiply.bind(null, 2);  // Lock 'a' as 2

console.log(double(5));  // 10
console.log(double(10)); // 20


// Exa 3: Callback — `this` is lost unless bound
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

// When a method is passed as a callback, JavaScript loses the original object reference
// so 'this' becomes undefined (in strict mode) or window (in sloppy mode).
// Using .bind() ensures the correct 'this'.

shieldAgent.printFullName();                    // Phil Coulson
setTimeout(shieldAgent.printFullName, 3000);    // undefined undefined (this is lost)
setTimeout(shieldAgent.printFullName.bind(shieldAgent), 3000); // Phil Coulson (this is preserved)


// Exa 4: Event listener — `this` becomes the DOM element
const counter = {
  count: 0,
  increment: function () {
    this.count++;
    console.log(this.count);
  }
};

// Without bind — loses `this`
document.getElementById("btn").addEventListener("click", counter.increment);  
// 'this' becomes the button

// With bind — 'this' remains the object
document.getElementById("btn").addEventListener("click", counter.increment.bind(counter));  
// Works as expected 