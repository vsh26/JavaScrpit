/*

    Promise:

      - The Promise object represents the eventual completion (or failure) of an asynchronous operation and its resulting value.

      - A Promise is a proxy for a value not necessarily known when the promise is created.

      - This lets asynchronous methods return values like synchronous methods:
        instead of immidiately returning the final value, the asynchronous methods
        returns a promise to supply the value at some point in the future.

      - A Promise is in one of these states:
        - pending: initial state (neither fullfilled nor rejected)
        - fulfilled: operation was completed successfully (resolve)
        - rejected: operation failed (reject)

*/

// Synchronous code inside Promise

// Pending - This will NEVER settle (no resolve or reject called)
let firstPromise = new Promise((resolve, reject) => {
    
});

// Fulfilled
let secondPromise = new Promise((resolve, reject) => {
    resolve(1000);
});

// Rejected
let thirdPromise = new Promise((resolve, reject) => {
    reject(new Error("Internal server error"));
});


// Asynchronous code inside Promise

function sayHello(){
    console.log("Hello!");
}

// Pending - This will NEVER settle (no resolve or reject called)
let fourthPromise = new Promise((resolve, reject) => {
    setTimeout(sayHello, 5000);
});

// Fulfilled
let fifthPromise = new Promise((resolve, reject) => {
    setTimeout(sayHello, 5000);
    resolve(1);
});

// Rejected
let sixthPromise = new Promise((resolve, reject) => {
    setTimeout(sayHello, 5000);
    reject(new Error("Internal server error"));
});


// .then(), .catch()

let newPromise01 = new Promise((resolve, reject) => {
    let success = true;

    if(success){
        resolve("Promise fulfilled");
    } else {
        reject("Promise rejected");
    }
});

newPromise01
    .then((message) => {
        console.log("Message from then is: " + message);
    })
    .catch((message) => {
        console.log("Message from then is: " + message);
    })
    .finally((message) => {
        console.log("I am always executed");
    });

// Promise chaining -> multiple .then()

newPromise01
    .then((message) => {
        console.log("Initial msg: " + message);
        return "Promise fulfilled second message";
    })
    .then((message) => {
        console.log("Second msg: " + message);
        return "Promise fulfilled third message";
    })
    .then((message) => {
        console.log("Third msg: " + message);
    })
    .finally((message) => {
        console.log("I am always executed");
    });