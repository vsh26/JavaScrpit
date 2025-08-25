function createInstance(){

    let store = {
        value : 100
    };  // Assume this object is of 100 MB

    return function(){
        console.log(store);
    };
}

const logger = createInstance();

logger();
logger();
logger();

// Assume there is 1 Million line of code here,
// and we don't need to use logger in this code or in further lines

// Assume this 1 Million line of code runs for next 20 days
// So our 100 MB will still be occupied

// After we finish using logger, we can set it to null or undefined, this will dereference
logger = null;

// If you need it further, don't make it null