// Exa 1:

const user = {
  username: "Tony",
  age: 50,
};

// const username = obj.username;
// const age = obj.age;

const {username, age} = user;
console.log(username); // Tony
console.log(age);  // 50


// Exa 2: Renaming during destructuring

const { username: uName } = user;
console.log(uName); // Tony


// Exa 3: Default Values in Objects

const { role = "Guest" } = user;
console.log(role); // Guest

