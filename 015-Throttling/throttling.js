function throttle(fn, delay){

    let myId = null;

    return function(...args){
        
        if(myId === null){
            fn(...args);

            myId = setTimeout(() => {
                myId = null;
            }, delay);
        }
    }
}

function greet(name){
    console.log(`Hello ${name}`);
}

const throttledGreet = throttle(() => greet("Tony"), 3000);
throttledGreet();
throttledGreet();
throttledGreet();
throttledGreet();
throttledGreet();

// setTimeout(() => throttledGreet(), 2000);
// setTimeout(() => throttledGreet(), 3000);
