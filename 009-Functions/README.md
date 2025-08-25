# Functions

In JavaScript, functions are first-class citizens. It means functions are treated just like any other value — like numbers, strings, or objects. You can:

| Feature                                        | Allowed in JS? | Common Use Case                 |
| ---------------------------------------------- | -------------- | ------------------------------- |
| Store a function in a variable                 |   Yes          | Reuse function logic            |
| Pass a function as an argument to another func |   Yes          | Callback, event handlers        |
| Return a function from another function        |   Yes          | Closures, function factories    |
| Store functions in objects as a property       |   Yes          | Object methods                  |
| Store in arrays                                |   Yes          | Function queues, pipelines      |

---

## Higher Order Functions
- A higher-order function is a function that does at least one of the following:
    - Takes another function as an argument
    - Returns another function

- Common built-in higher order functions
    - `map()`
    - `filter()`
    - `reduce()`
    - etc.

---