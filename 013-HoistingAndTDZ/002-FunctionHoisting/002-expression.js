sayHi(); // TypeError: sayHi is not a function

var sayHi = function () {
  console.log("Hi!");
};

/*

- var sayHi is hoisted (as undefined)
- So it's like doing undefined() → which gives a TypeError

*/