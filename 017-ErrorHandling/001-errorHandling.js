/*
ERRORS
    - Syntax Error (e.g., missing brackets or invalid tokens)
        → Detected before code runs
    - Runtime Error (e.g., ReferenceError, TypeError)
        → Detected while executing code
*/


// console.log(x);


// ERROR HANDLING

try{
    console.log("try block starts here");
    
    console.log(x); // Whenever we get error at this line, further lines will not be executed
                    // The control will go to catch block
                    // If no error, code will execute smoothly. Control will never go to check

    console.log("block after error line");
    
    // a

    // b

    //c

} catch (e) {

    // Here we define, what we want to do with the error

    // retry logic
    // fallback mechanism
    // logging
    // custom error message

    console.log("Inside catch block");
    console.log("Error is: ", e);

}


// finally

try{

} catch(err){

} finally {
    // This block runs everytime, irrespective of error found or not
}


// throw

// Creating custom error

// Exa 1:
// try{
//     console.log(x);
// } catch (e) {
//     throw new Error("I'm the custom error");
// }


// Exa 2:
let errorCode = 100;
if(errorCode == 100){
    throw new Error("Invalid JSON");
}

