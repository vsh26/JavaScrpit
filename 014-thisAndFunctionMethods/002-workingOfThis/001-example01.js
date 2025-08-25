const ironMan = {
  name: "Tony Stark",
  sayHi: function () {
    console.log("Hi, I am " + this.name);
  }
};

ironMan.sayHi();  // Hi, I am Tony Stark

// Works as expected

// Why?
// When we call ironMan.sayHi(), we are calling the method on the object.
// So here, this refers to the object ironMan
