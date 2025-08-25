// custom function that returns a promise to understand how promise works

// function wait(seconds){
//     return new Promise((resolve, reject) => {
//         setTimeout(() => resolve(), seconds * 1000);
//     });
// }

// wait(5)
//     .then(() => console.log("Promise resolved after 10 sec"))
//     .catch(() => console.log("Promise rejected after 10 sec"))
//     .finally(() => console.log("Finally")); 


// Signature:
// Promise is a class
// As soon as object of promise class is created, and executor function is given
// executor function has resolve function and reject function as parameters
// When resolve is called:
//  - promise fullfilled
//  - all .then() functions are called
// When reject is called:
//  - promise is rejected
// - all .catch() functions are called
// .finally() is called everytime


// Polyfill for promise


class MyPromise{

    constructor(executorFunction){

        this._state = 'pending';
        this._successCallBacks = [];
        this._errorCallBacks = [];
        this._finallyCallBacks = [];

        this.value = undefined;

        // parameters of executor function - resolve and reject functions
        executorFunction(
            // since these functions are called from outside, binding will be lost, so we will have to bind them
            this.resolverFunction.bind(this),
            this.rejectorFunction.bind(this)
        );
    }

    thenFunction(cb){

        // If promise is already fulfilled, no need to register function, directly run it
        if(this._state == 'fulfilled'){
            cb(this.value);
            return this;
        }

        // Every callback in then() function
        this._successCallBacks.push(cb);
        return this;
        // return the object itself, this will help to chain catch
    }

    catchFunction(cb){

        if(this._state == 'rejected'){
            cb();
            return this;
        }

        // Every callback in catch() function
        this._errorCallBacks.push(cb);
        return this;
    }

    fianllyFunction(cb){
        if(this._state != 'pending'){
            cb();
            return this;
        }
        this._finallyCallBacks.push(cb);
        return this;
    }

    // When resolve function is called, execute every success cb function in then function
    resolverFunction(value){
        this.value = value
        this._state = 'fulfilled';
        this._successCallBacks.forEach((cb) => cb(value));
        this._finallyCallBacks.forEach((cb) => cb());
    }

    // When resolve function is called, execute every error cb function in catch function
    rejectorFunction(err){
        this._state = 'rejected';
        this._errorCallBacks.forEach((cb) => cb(err));
        this._finallyCallBacks.forEach((cb) => cb());
    }
}

function wait(seconds){
    return new MyPromise((resolverFunction, rejectorFunction) => {
        setTimeout(() => resolverFunction('abc'), seconds * 1000);
    });
}

wait(5)
    .thenFunction((e) => console.log("Promise resolved after 10 sec", e))
    .catchFunction(() => console.log("Promise rejected after 10 sec"))
    .fianllyFunction(() => console.log("Finally"));


function myWait(seconds){
    const p = new MyPromise((resolverFunction, rejectorFunction) => {
        resolverFunction('abc');
    });

    return p;
}

const p = myWait(5);

p.thenFunction((e) => console.log("V1 Promise resolved", e))
    .catchFunction(() => console.log("V1 Promise rejected"))
    .fianllyFunction(() => console.log("V1 Finally"));

p.thenFunction((e) => console.log("V2 Promise resolved", e))
    .catchFunction(() => console.log("V2 Promise rejected"))
    .fianllyFunction(() => console.log("V2 Finally"));
