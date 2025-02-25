/*
    - Object.defineProperty(object, property, descriptor)
    - Object.defineProperties(object, descriptors)
    - Object.getOwnPropertyDescriptor(object, property)
    - Object.getOwnPropertyDescriptors(object)
    - Object.getOwnPropertyNames(object)
    - Object.getPrototypeOf(object)
*/

// Object.defineProperty(object, property, descriptor)
    // Adding a new property to an object
    // Changing property values
    // Changing property metadata
    // Changing object getters and setters

const person1 = {
    firstName: "Tony",
    lastName : "Stark"
};

const person2 = {
    firstName : "Steve",
    lastName : "Rogers",
    age : "45"
}

Object.defineProperty(person1, "age", {value:"50"});
console.log(person1);    // age property exits but will not be shown in output, because properties added using Object.defineProperty() are non-enumerable (enumerable : false). They are also non-writable(writable : false), non-configurable (configurable : false).
console.log(person1.age);

Object.defineProperty(person1, "superhero", {value : "Iron Man", enumerable : true});
console.log(person1);


// Object.defineProperties(object, descriptors) - Adding or changing multiple object properties
Object.defineProperties(person1, {
    powerSource : {
        value : "Arc Reactor",
        enumerable : true
    },
    suits : {
        value : ["Mark 1", "Mark 10", "Mark 42"],
        enumerable : true
    },
    industries : {
        value : {
            name : "Stark Industires",
            doamin : "Engineering",
            CEO : "Pepper Pots",
            owner : "Tony Strak"
        },
        enumerable: true
    }
});

console.log(person1);


// Object.getOwnPropertyDescriptor(object, property) - returns an object describing the configuration of a specific property on a given object
const descriptor1 = Object.getOwnPropertyDescriptor(person1, "superhero");
console.log(descriptor1);

// Object.getOwnPropertyDescriptors(object) - returns an object describing the configuration of all properties on a given object
const descriptor2 = Object.getOwnPropertyDescriptors(person1);
console.log(descriptor2);


// Object.getOwnPropertyNames(object) - returns an array of all properties (including non-enumerable properties except for those which use Symbol) found directly in a given object.

const propertyNames = Object.getOwnPropertyNames(person1);
console.log(propertyNames);


// Object.getPrototypeOf(object) - returns the prototype
const prototype1 = Object.getPrototypeOf(person1);
console.log(prototype1);

console.log(Object.getPrototypeOf(person1) === Object.getPrototypeOf(person2));

