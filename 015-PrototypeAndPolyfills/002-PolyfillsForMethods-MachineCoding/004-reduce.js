const arr = [1, 2, 3, 4, 5];

console.log(arr.reduce((accumulator, currentValue) => accumulator + currentValue, 0));
console.log(arr.reduce((accumulator, currentValue) => accumulator + currentValue, 15));
console.log(arr.reduce((accumulator, currentValue) => accumulator + currentValue));


if   (!Array.prototype.myReduce){

    Array.prototype.myReduce = function(cb, initialValue = undefined){

        let acc = initialValue || this[0];
        
        let startIndex = initialValue ? 0 : 1;

        for(let i = startIndex; i < this.length; i++){
            acc = cb(acc, this[i]);
        }

        return acc;
    }
}

console.log(arr.myReduce((acc, curr) => acc + curr, 0));
console.log(arr.myReduce((acc, curr) => acc + curr, 15));
console.log(arr.myReduce((acc, curr) => acc + curr));