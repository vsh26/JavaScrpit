const ironMan = {
  name: "Tony Stark",
  sayHi: function () {
    console.log("Hi, I am " + this.name);
  }
};

const say = ironMan.sayHi;
say(); // "Hi, I am undefined"


// Why this fails?
// We are assigning the function to a standalone variable
// So now when we call say(), we are not calling it as a method of ironMan anymore.
// So, inside say(), this is either:
//  - undefined (in strict mode)
// - or the global object (window in browsers)