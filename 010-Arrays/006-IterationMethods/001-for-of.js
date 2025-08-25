/*

    The for...of statement executes a loop that operates on a sequence of values sourced from an iterable object (such as Array, String, TypedArray, Map, Set, NodeList (and other DOM collections), as well as the arguments object, generators produced by generator functions, and user-defined iterables.). 

    Syntax:
        for (variable of iterable)
            statement
        
*/


const cars = ["Mercedes", "BMW", "Audi", "Porsche"];

// Accessing the elements
for (const car of cars) {
    console.log(car);
}
