function countPositive(arr){
     let count = 0;
    arr.forEach(element => {
        if(element > 0){
            count++;
        }
    });

    return count;
}

console.log(countPositive([1, -3, 5]));
console.log(countPositive([-2, 3, -5, 7, 10]));