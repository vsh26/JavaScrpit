let promise1 = new Promise((resolve, reject) => {
    setTimeout(resolve, 4000, "First");
});

let promise2 = new Promise((resolve, reject) => {
    setTimeout(resolve, 2000, "Second");
});

let promise3 = new Promise((resolve, reject) => {
    setTimeout(resolve, 1000, "Third");
});

Promise.all([promise1, promise2, promise3]);
// This returns a new promise

// It waits for all input promises to be fulfilled
// If they all succeed → it resolves with an array of results in order
// If any promise rejects → it rejects immediately with the first error

Promise.all([promise1, promise2, promise3])
    .then(console.log);
//Even though promises resolve at different times, the final array preserves the original order of the promises

Promise.all([promise1, promise2, promise3])
    .then((values) => {
         console.log(values);
    })
    .catch((error) => {
        console.log("Error: "+ error);
    });