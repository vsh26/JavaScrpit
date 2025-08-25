// Signature:
// parameter -> callback
// return -> new array (with result of work asked to be done by user)
// does not modify original array
// performs specified operation on each element, and push the result of that operation into new array

const multiplyBy10 = function(value){
    return value*10;
}

const arr = [1, 2, 3];

const result = arr.map(multiplyBy10);

console.log(result);

// Writing pollyfill for map()

if(!Array.prototype.myMap){

    Array.prototype.myMap = function(userFunction){

        const mapResult = [];

        for(let i = 0; i < this.length; i++){
            mapResult.push(userFunction(this[i]));
        }

        return mapResult;
    }
}

const myResult = arr.myMap(multiplyBy10);
console.log(myResult);