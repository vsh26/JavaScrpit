// In a regular function (not inside an object)

function sayHi() {
  console.log(this);
}

sayHi();

// Here, 'this' refers to
// In browser: `window`
// In strict mode or Node: `undefined`
