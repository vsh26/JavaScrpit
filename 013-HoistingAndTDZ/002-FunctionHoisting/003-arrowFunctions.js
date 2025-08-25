shout(); // ReferenceError

const shout = () => {
  console.log("Hey!");
};

/*

- shout is in Temporal Dead Zone
- You cannot use it before the declaration line

*/