/*
    reduceRight() method works similar to reduce(), but from RIGHT-to-LEFT
*/

// Exa: Reversing an Array

let cars = ['Mercedes', 'BMW', 'Audi'];

let reversedCars = cars.reduceRight((accumulator, currentValue) => {
    accumulator.push(currentValue);
    return accumulator;
}, []);

console.log(reversedCars); // ['Audi', 'BMW', 'Mercedes']


// Exa: Flattening array but in reverse order
let nestedArray = [[1, 2], [3, 4], [5, 6]];

let flattened = nestedArray.reduceRight((accumulator, currentValue) => {
    return accumulator.concat(currentValue);
}, []);

console.log(flattened); // [5, 6, 3, 4, 1, 2]
