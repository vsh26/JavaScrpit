/*

- push(num)
- pop()
- unshift(num)
- shift()

- length

- toString()

- join()

- at()
- []

- concat(arr1, arr2)

- slice()
- splice()


- Array.isArray()
- Array.from()
- Array.of()


*/



let cars = ["Mercedes", "BMW", "Audi", "Porsche"];
let cars1 = ["Suzuki", "Hyundai", "Honda", "Mahindra", "Tata"];
let cars2 = ["Rolls Royce", "Bugatti", "Lamborghini"];

// length
// length/ size of array
console.log(cars.length);


// toString()
// convert array to string, and seperate elements using comma
console.log(cars.toString());


// join()
// convert array to string, and seperate elements using any seperator
console.log(cars.join("*"));


// at(), []
// element at specific index
console.log(cars.at(1));
console.log(cars[1]);


// push()
// adding elements to the end of array
console.log(cars.push("Land Rover"));
console.log(cars);
cars[cars.length] = "Lexus";
console.log(cars);


// pop()
// removing last element from array
console.log(cars.pop());
console.log(cars);


// shift()
// removes first element from array and moves all other elements to lower index
console.log(cars.shift());
console.log(cars);


// unshift()
// add elements to the beginning of the array and moves other elements to higher index
console.log(cars.unshift("Jaguar"));
console.log(cars);


// changing element at particular index
cars[0] = "Opel";
console.log(cars);


// concat()
// Concatenating arrays
const allCars = cars.concat(cars1, cars2);
console.log(allCars);


// copyWithin()
// copy array element to another position
cars.copyWithin(1, 4);
console.log(cars);


// flat()
// reducing dimension of array
let nums = [[1,2], [3,4], [5,6], [7,8]];
console.log(nums);

const newNums = nums.flat();
console.log(newNums);


// flatMap()
// maps all elements of array, then creates new array by flattening the array
let nums1 = [1,2,3,4,5];
const mappedNums = nums1.flatMap(x => [x, x*10]);
console.log(mappedNums);


// splice()
// adds new items to array
let phones = ["iPhone", "Samsung", "Motoroala", "Xiaomi", "Asus", "Nothing"];
let removedPhones = phones.splice(2, 0, "Oppo", "Vivo");
console.log(removedPhones);
console.log(phones);
// Elements are spliced in at index 2
// 0 elemts are removed
// New array: ['iPhone','Samsung','Oppo','Vivo','Motoroala','Xiaomi','Asus','Nothing']


removedPhones = phones.splice(3, 1, "OnePlus", "Realme", "Honor");
console.log(removedPhones);
console.log(phones);
// Elements are spliced in at index 3
// 1 elemts are removed (Vivo)
// New array: ['iPhone','Samsung','Oppo','OnePlus','Realme','Honor','Motoroala','Xiaomi','Asus','Nothing']


// toSpliced()
// splice an array without altering original array (creates a new array) 
const newPhones = phones.toSpliced(1, 0, "Lenovo");
console.log(newPhones);


// slice()
// slices out a pieceof array into new array
let phones1 = phones.slice(1, 5);
console.log(phones1);
// Element at index 1 is included, element at index 5 is not included