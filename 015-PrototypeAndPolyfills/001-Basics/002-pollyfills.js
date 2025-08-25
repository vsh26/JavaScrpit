/*
    Polyfill:

        - A polyfill is a piece of code (usually JavaScript) used to provide modern functionality on older browsers that do not natively support it.

        - Before adding a method, we check if it already exists to avoid overwriting native implementations.

*/

if(!Array.prototype.newFunction){

    // We have an option to throw error ("Please update your browser")

    // OR

    // We can explicitly define it
    Array.prototype.newFunction = function(){

    };

    // Fallback - Polyfill
}

arr.newFunction();  // Calls the polyfilled method
