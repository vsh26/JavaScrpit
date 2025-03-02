/*

- I should have a fn increment()
- On call of the function it should increment the number
- and return current counter
 
- console.log( increment() ); 1
- console.log( increment() ); 2
- console.log( increment() ); 3
- console.log( increment() ); 4

*/


let count = 0;

function increment(){
    count++;
    return count;
}

console.log(increment());       // 1
console.log(increment());       // 2
console.log(increment());       // 3

count = -100;               // Someone else who neeeded count, reassigned it

console.log(increment());       // -99
console.log(increment());       // -98
console.log(increment());       // -97

// How do we resolve the above problem ?



// function test(){
//     let x = 10;
//     x++;
//     return x;
// }

// console.log(test());    // 11
// console.log(test());    // 11
// console.log(test());    // 11
// console.log(test());    // 11


function test() {
    let x = 10;

    function increment(){
        x++;
        return x;
    }

    return increment;
}

const f = test();
const g = test();

console.log(f());   // 11
console.log(f());   // 12
console.log(f());   // 13
console.log(f());   // 14
console.log(g());   // 11
console.log(g());   // 12


// This is a good example of Encapsulation

function increment1(){
    let count = 0;

    return function(){
        count++;
        return count;
    }
}

console.log(increment1()());     // 1
console.log(increment1()());     // 1
console.log(increment1()());     // 1
console.log(increment1()());     // 1
console.log(increment1()());     // 1

let x = increment1();
let y = increment1();

console.log(x());   // 1
console.log(x());   // 2
console.log(y());   // 1
console.log(x());   // 3
console.log(x());   // 4
console.log(y());   // 2
console.log(x());   // 5



function createCounter(stepSize = 1, initialValue = 0){

    return function(){
        initialValue += stepSize;
        return initialValue;
    }
}

const a = createCounter(3, 10);
console.log(a());   // 13
console.log(a());   // 16
console.log(a());   // 19
