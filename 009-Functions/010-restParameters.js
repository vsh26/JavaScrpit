/* 

Rest Parameter (...)

    function(...args){
    
    }

    - allows the function to treat an indefinite number of arguments as an array
    - args is a real array
    - can be used with arrow functions
    - can use all array methods like .map(), .filter(), .reduce() on it

*/

function test2(...args){
    let sum = 0;

    for(let arg of args){
        sum += arg;
    }

    console.log(args);
    console.log(args.length);
    
    return sum;
}

console.log(test2(1,2,3,4,5));