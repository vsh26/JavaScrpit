/*

- reverse()
- sort()
- toReversed()
- toSorted()


*/


let cars = ["Mercedes", "BMW", "Audi", "Mercedes", "Land Rover", "Mercedes", "Jaguar", "Land Rover"];
console.log(cars);


// reverse() - reverses the array
cars.reverse();
console.log(cars);


// sort() - sorts the array alphabetically
cars.sort();
console.log(cars);


let cars1 = ["Suzuki", "Hyundai", "Honda", "Mahindra", "Tata"];
console.log(cars1);

// toReversed() - reverses the array, without altering the original one
const reversedCars1 = cars1.toReversed();
console.log(reversedCars1);


// toSorted() - sorts the array without altering the original one
const sortedCars1 = cars1.toSorted();
console.log(sortedCars1);
