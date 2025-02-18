// Prototype Basics

console.log(Array.prototype);

const arr = [1,2,3]

console.log(arr.__proto__);

Array.prototype.ironMan = function(){
    return "I am Iron Man";
}

const res = arr.ironMan();
console.log(res);


// Polyfill basics

if(!Array.prototype.newFunction){

    // We have an option to throw error ("Please update your browser")

    // OR

    // We can explicitly define it
    Array.prototype.fill = function(){

    };

    // Fallback - Polyfill
}

arr.fill();

