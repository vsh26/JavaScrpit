// Exa: Error: .forEach function does not exist on arr variable

// How to approach - Understand real signature of funtion

const arr = [10,20,30];

const res = arr.forEach(function(value, index){
    console.log(`Value at ${index} is ${value}`);
});

const userFunction = function(value, index){
    console.log(`Value: ${value}, Index: ${index}`);
}
const result = arr.forEach(userFunction);

// console.log(`Returned: ${res}`);

// Signature:
// parameter for forEach -> function; function parameters -> index, value
// what forEach does? -> calls function for every value 
// return -> no return

// Writing Polyfill for forEach()

if(!Array.prototype.myForEach){

    Array.prototype.myForEach = function(userFunction){

        const originalArr = this;   // Points to current object

        for(let i = 0; i < originalArr.length; i++){
            userFunction(originalArr[i], i);
        }
    }
}

const myResult = arr.myForEach(userFunction);