// In a method (inside an object)
const person = {
  name: "Tony Stark",
  greet: function () {
    console.log("Hi, I am " + this.name);
  }
};

person.greet(); // Hi, I am Tony Stark

// Here, 'this' refers to the object that called it
// In this case, 'this' refers to the person object — because greet was called as a method on person.
