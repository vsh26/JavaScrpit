const tony = {
  name: "Tony Stark",
  greet: function () {
    console.log("Hi, I am " + tony.name);
  }
};

const steve = {
  name: "Steve Rogers",
  greet: function () {
    console.log("Hi, I am " + steve.name);
  }
};

// we’re hardcoding the object name (tony, steve) inside the function.
// This violates DRY (Don’t Repeat Yourself).
