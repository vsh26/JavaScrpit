/*
    - Object.hasOwn(object, property)
    - Object.assign(target, source)
    - Object.create(object)
    - Object.entries(object)
    - Object.fromEntries()
    - Object.keys(object)
    - Object.values(object)
    - Object.groupBy(object, callback)
*/

const car1 = {
    model : "Land Rover",
    brand : "Range Rover",
    color : "Black"
}

const car2 = {
    model : "Defender",
    color : "Red",
    parentBrand : "TATA"
}

console.log(car1);
console.log(car2);

// Object.hasOwn(object, property) - returns true if the specified object has the indicated property as its own property. If the property is inherited, or does not exist, the method returns false.

console.log(Object.hasOwn(car1, "brand"));

// Object.assign(target, source) - Copies enumerable own properties from a source object to a target object, returns modified target object
Object.assign(car1, car2);

console.log(car1);
console.log(car2);


// Object.create(object) - Creates an object from an existing object as the prototype of the newly created object
const car3 = Object.create(car2);

console.log(car3);      // {}

car3.model = "Discovery";
car3.brand = "Land Rover";
car3.price = "INR 70,00,000/-"

console.log(car3);


// Object.entries(object) - Returns an ARRAY of the [key, value] pairs of an object
const objectEntries = Object.entries(car3);
console.log(objectEntries);

// can be used with loops
for(let [key, value] of Object.entries(car2)){
    console.log([key, value]);
}

// makes it simple to convert OBJECTS to MAP
const myMap = new Map(Object.entries(car2));
console.log(myMap);


// Object.fromEntries() - Creates an object from a list of keys/values
const fruits = [
    ["apples", 300],
    ["pears", 900],
    ["bananas", 500]
];

const fruitObject = Object.fromEntries(fruits);
console.log(fruitObject);


// Object.keys(object) - Returns an array of the enumerable keys of an object
const keyArray = Object.keys(fruitObject);
console.log(keyArray);

// Object.values(object) - Returns an array of the enumerable property values of an object
const valueArray = Object.values(fruitObject);
console.log(valueArray);


// Object.groupBy(object, callback) - groups elements of an object according to string values returned from a callback function.

const myFruits = [
    {name:"apples", quantity:300},
    {name:"bananas", quantity:500},
    {name:"oranges", quantity:200},
    {name:"kiwi", quantity:150}
];

function myCallback({ quantity }) {
    return quantity > 200 ? "ok" : "low";
}

const result = Object.groupBy(myFruits, myCallback);
console.log(result);

