// var is not confined to blocks, only to the nearest function scope. This can lead to unexpected behavior:


// ---------- 1. Block Scope ----------

// Exa 1:

{
  var x = 10;
}
console.log(x); // 10


// Exa 2:
for (var i = 0; i < 3; i++) {
  // ...
}
console.log(i); // 3


// ---------- 2. Function Scope ----------

// Exa: 
function test() {
  var a = 5;
}
console.log(a); // ReferenceError: a is not defined


// Exa:
function test() {
  if (true) {
    var a = 5;
  }
  console.log(a); // 5
}


/*

Why not use var?

    - unexpected behaviour
      - behaves diffently with blocks
      - behaves differently with functions
      
    - re-declaration allowed
*/

/*
    Undeclared variables (created without a keyword var, let, const), are always global, even if they are created inside a function.

    function myFunction() {
        a = 4;
    }

    Here, a is a global variable
*/