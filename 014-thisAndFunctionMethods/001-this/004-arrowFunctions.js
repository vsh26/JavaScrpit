// In arrow functions

// Arrow functions do not have their own 'this'.
// They inherit 'this' from their surrounding scope, i.e., where the arrow function was defined.

// In other words - In arrow functions, 'this' refers to the value of 'this' in the scope where the function was defined — not the object that calls it. 

const person = {
  name: "Steve Rogers",
  greet: () => {
    console.log("Hi, I am " + this.name);
  }
};

person.greet(); // Hi, I am undefined

//  Here, 'this' is not person. It's the outer scope (usually window or undefined in strict mode).

// “But greet is inside person, so shouldn’t it know this.name?”


// Reason it doesn’t work:
// An arrow function does not care about the object it's inside.
// Instead, it looks outside the object — to where the function was created.
