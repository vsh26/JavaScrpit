// Use debugger with this code to understand this

/*
    Lexical Scope:
        - A convention that how determinses how variables are accessible in block of code
        - It is based on the physical location of variables and code blocks in the source code
        - It is determined when the code is created, not when it's run
        - Inner functions can use variables from outer functions they're inside in

    Closure Function:
        - A closure function is a function that has access to the variables of its outer function,
          even after the outer function has finished its execution
        - It is basically a function that is binded by its lexical scope
*/

let fname = "Tony";
let team = "Avengers";

// let fname = "Bruce";
// cannot re-declare block-scoped variable 'fname'

function sayName(){
    let fname = "Bruce";
    let lname = "Fury";

    // JS will check if fname exists in the memory phase of its FEC
    // If not found it checks with [[Scope of Parent]]
    console.log("Inside of sayName fn the value of fname is ", fname);
    console.log("Inside of sayName", fname, " ", lname);


    function inner(){
        console.log("Inside inner fn", fname, " ", lname, " ", team);
        return;
    }

    inner();
}

console.log("Value of fname is ", fname);
sayName();

// How any variable is read in function
// - Checks in local (Function Execution Context) memory phase
// - If not found, check in its parent
// - If not found, check in its parent
// .
// .
// .
// - Till scope of GEC