const tony = {
  name: "Tony Stark",
  greet: function () {
    console.log("Hi, I am " + this.name);
  }
};

const steve = {
  name: "Steve Rogers",
  greet: tony.greet  // reuse the function
};

tony.greet();  // Hi, I am Tony Stark
steve.greet(); // Hi, I am Steve Rogers

// 'this' made the code reusable