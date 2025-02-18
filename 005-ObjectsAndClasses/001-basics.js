const obj1 = {
    fname : 'Tony',
    lname : 'Stark',
    getFullName : function(){
        return `${this.fname} ${this.lname}`;
    }
};

const obj2 = {
    fname : 'Steve',
    lname : 'Rogers',
    getFullName : function(){
        return `${this.fname} ${this.lname}`;
    }
};

// DRY - Do Not Repeat Yourself, is violated here
console.log(obj1.getFullName());
console.log(obj1.getFullName());

const obj3 = {
    fname : 'Bruce',
    lname : 'Banner',
};

// console.log(obj3.getFullName());
// This will throw error.
// The code will first check in obj3 if getFullName exist
// If the method is not found, it will check in __proto__ (points to predefined prototypes of Objects)
// Other functions will work

console.log(obj3.toString());

obj3.__proto__ = obj2;      // now __proto__ in obj3 points to obj1

console.log(obj3.getFullName());    // now this works

console.log(obj3.toString());       // This will also work
// __proto__ of obj3 is pointing to obj1, which has __proto__ that points to prototypes of objects
// It will continue to look until it finds null

console.log(obj1.__proto__.__proto__);      // returns null

obj3.__proto__ = null;
// console.log(obj3.toString());
// This will throw error because now we broke the chain

// Prototype Inheritance/ Prototype Chaining


// Why everything in JS is object

const arr = [1, 2, 3];
console.log(arr.__proto__);                 // Object (Array)
console.log(arr.__proto__.__proto__);       // Object

const string = "ThisIsAString";
console.log(string.__proto__);              // String
console.log(string.__proto__.__proto__);    // Object
