// Now let us assume sum is an intensive task

console.log("Starting program");

const result = sum(2, 5);
console.log("Result is ", result);

// // Assume there were 10M lines of code here, but they won't be executed and will have to wait for result (blocked)
console.log("End of program");

function sum(a, b){
    return a + b;
}
