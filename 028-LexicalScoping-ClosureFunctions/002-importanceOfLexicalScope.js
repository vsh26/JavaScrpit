let x = "global";

function outer() {
    let x = "outer";

    function inner() {
        console.log(x);
    }

    return inner;
}

const fn = outer();
fn();   // prints "outer", not "global"

// Even though fn() is called in global scope,
// it prints "outer" because its lexical scope was fixed when it was defined inside outer