// Now let us assume sum is an intensive task

console.log("Starting program");

const result = sum(2, 5);
console.log("Result is ", result);

// // Assume there were 10M lines of code here, but they won't be executed and will have to wait for result (blocked)
console.log("End of program");

function sum(a, b){
    return a + b;
}

// sum(2, 5) runs immediately and blocks execution until it’s finished
// In code, it’s just 2 + 5 (trivial), but imagine sum is an expensive operation (like calculating prime factors of a huge number)
// Until sum finishes, the program cannot move forward. Those “10M lines of code” are waiting idle — blocked