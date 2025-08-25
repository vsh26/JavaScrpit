/*
    - ... (spread) allows an iterable, such as an array or string, to be expanded in places where zero or more arguments (for function calls) or elements (for array) are expected.

    - In an object, the spread syntax enumerates the properties of an object and adds the key-value pairs to the object being created.

*/

sum = (x, y, z, w, v) => {
    return x+y+z+w+v;
}
const numbers = [1, 2, 3, 4, 5];

console.log(sum(...numbers));