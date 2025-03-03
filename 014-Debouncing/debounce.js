/*
    Debouncing, means to discard operations that occur too close together during a specific interval,
    and consolidate them into a single invocation.
*/

function debounce(fn, delay){

    // console.log(arguments);

    let myId;

    return function(...args){

        // pass the timeoutID to cancel the timeout
        clearTimeout(myId);

        // store the timeoutID (+ve integer) -> to identify timer created by the call to setTimeout()
        myId = setTimeout(() => {
            fn.apply(this, args);
        }, delay);
    };
}

function greet(name){
    console.log(`Hello ${name}`);
}

const debouncedGreet = debounce(() => greet("Tony"), 3000);
debouncedGreet();
debouncedGreet();
debouncedGreet();
debouncedGreet();
debouncedGreet();
debouncedGreet();