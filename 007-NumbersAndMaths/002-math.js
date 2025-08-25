// Math is also an in-built object

/*

Some important functions:
    
    - abs()
    - round()
    - ceil()
    - floor()
    - min()
    - max()
    - random()

*/

console.log(Math);                  // 
console.log(Math.abs(-4));          // 4
console.log(Math.round(4.6));       // 5 
console.log(Math.ceil(4.2));        // 5
console.log(Math.floor(4.2));       // 4
console.log(Math.min(4, 3, 6, 8));  // 3
console.log(Math.max(4, 3, 6, 8));  // 8

console.log(Math.random());                           // Random number [0, 1)
console.log(Math.random() * 10);                      // Random number [0, 10)
console.log((Math.random() * 10) + 1);                // Random number [0, 11)
console.log(Math.floor((Math.random() * 10) + 1));    // Random int number [0, 10]


const minVal = 10;
const maxVal = 20;

console.log(Math.floor(Math.random() * (maxVal - minVal + 1)) + minVal); // Random int number [10, 20]
