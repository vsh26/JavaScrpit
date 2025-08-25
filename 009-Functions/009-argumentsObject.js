/*

arguments

    - Every regular (non-arrow) function has access to an arguments object
    - It is an in-built array-like object
    - arguments contains an array-like object containing all passed values (arguments), when the function was invoked
    - cannot be used with arrow functions
    - cannnot use all array methods on arguments

    
arguments.length - length of arguments received when function was invloked

*/


// ---------- Example 1: ----------
function sum() {
  let total = 0;
  for (let i = 0; i < arguments.length; i++) {
    total += arguments[i];
  }

  console.log(arguments);
  console.log(arguments.length);
  
  return total;
}

console.log(sum(10, 20, 30));


// ---------- Example 2: ----------
function test1(a, b){

    for(i of arguments){
        console.log(i);
    }

    return arguments.length;
}

console.log(test1(1, 1));