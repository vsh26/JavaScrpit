// A function declaration defines a named function using the function keyword.

function addition(a, b){
    return a + b;
}

let sum = addition(10, 5);
console.log(sum);


// Function declarations are hoisted completely (we can call the function before it is defined)

greet();

function greet() {
  console.log("Hello!");
}