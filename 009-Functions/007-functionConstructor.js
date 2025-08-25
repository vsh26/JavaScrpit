// Defining function with FUNCTION CONSTRUCTOR

const myFunction = new Function ("a","b", "return a*b");
console.log(myFunction(5, 10));     // 50