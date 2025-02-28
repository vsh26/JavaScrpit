// Now let us assume sum is an intensive task. Let's simulate time by setTimeout(). Let's try to make it asynchronous.

console.log("Stating program");

const result = sum(2, 5, (result) => {
    console.log("Result is ", result);
});

// Assume there were 10M lines of code here, still they will be executed and don't have to wait for result
console.log("End of program");


function sum(a, b, cb){
    setTimeout(() => {
        cb(a+b);
    }, 5 * 1000);
}