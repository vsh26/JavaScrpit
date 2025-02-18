// Signature:
// Parameter -> callback
// Return -> returns a new array, with only those elements that pass the test
// Functionality -> calls function for every value, and adds current value to the result array if it passes the test (returns true)




const divisibleBy3 = function(value){
    if(value%3 === 0){
        return true;
    }else{
        return false;
    }
}

const arr = [10, 20, 30, 40, 50, 60];

const result = arr.filter(divisibleBy3);
console.log(result);

if(!Array.prototype.myFilter){
    
    Array.prototype.myFilter = function(userFunction){

        const filterResult = [];

        for(let i = 0; i < this.length; i++){
            if(userFunction(this[i])){
                filterResult.push(this[i]);
            }
        }

        return filterResult;
    }
}

const myResult = arr.myFilter(divisibleBy3);
console.log(myResult);