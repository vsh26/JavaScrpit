Function.prototype.describe = function (){
    console.log(`Function name is ${this.name}`);
}

function greet(name){
    console.log(`Hello ${name}!`);
}

function userFunction(){

}

greet("Tony Stark");        // output: Hello Tony Stark!
greet.describe();           // output: Function name is greet
userFunction.describe();    // output: Function name is userFunction

// This is function declaration
function add(a, b){
    return a+b;
}

// This is function expression
const subtract = function(a, b){
    return a-b;
}

// First class function
function applyOperation(a, b, operation){
    return operation(a, b);
}

const result = applyOperation(5, 4, (x,y) => x/y);
console.log(result);


// Tiffin Concept

function createCounter (){
    let count = 0;

    return function(){
        count++;
        return count;
    }
}

console.log(createCounter());       // Create counter is invoked and a function is returned

const counter = createCounter();    // Create ounter is invoved, function is returned and stored in counter
console.log(counter());             // The returned function is invoked and count is returned


function onef(){
    let myName = "Tony";
}

// console.log(myName);
// Scope of myName is only inside the function

// function(){
//     console.log("Hello");
// }()

(function(){
    console.log("Hello");
})()