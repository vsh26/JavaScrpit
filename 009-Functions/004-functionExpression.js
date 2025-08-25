// A function expression is when a function is assigned to a variable. It can be anonymous or named.

const greet = function() {
  console.log("Hello!");
};

greet();

// Function expressions are not hoisted (we cannot call the function before it is defined)
