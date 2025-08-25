/*

CALLBACK FUNCTION
    - A callback function is simply a function that is passed as an argument to another function and is executed later.

*/

function greet(name) {
  console.log("Hello, " + name);
}

function processUser(callback) {
  const userName = "Tony";
  callback(userName); // calling the callback function
}

processUser(greet); // Output: Hello, Tony
