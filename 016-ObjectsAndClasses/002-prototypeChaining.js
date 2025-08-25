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

const obj3 = {
    fname : 'Bruce',
    lname : 'Banner',
};

// console.log(obj3.getFullName());
// This will throw an error - getFullName is not defined in obj3 or its prototype

// JS first looks in obj3 for getFullName,
// If the method is not found, it will check obj3.__proto__ -> Object.prototype (default)
// Other functions (in Object.prototype) will work

console.log(obj3.toString());   //  Works — because it's inherited from Object.prototype


// We can manually assign obj1 as prototype of obj3
obj3.__proto__ = obj1;      // now __proto__ in obj3 points to obj1 (not recommended in real-world code)

console.log(obj3.getFullName());    // now this works (via prototype chain)

console.log(obj3.toString());       // This will also work
// __proto__ of obj3 is pointing to obj1, which has __proto__ that points to prototypes of objects
// It will continue to look until it finds null

console.log(obj1.__proto__);                // Object.prototype
console.log(obj1.__proto__.__proto__);      // null

console.log(Object.prototype === obj1.__proto__);   // true


console.log(obj3.__proto__);                // obj1
console.log(obj3.__proto__.__proto__);      // Object.prototype
console.log(obj3.__proto__.__proto__.__proto__); // null

console.log(Object.prototype === obj3.__proto__);   // false
console.log(Object.prototype === obj3.__proto__.__proto__); // true

// This shows: Prototype Inheritance / Prototype Chaining


// Breaking the prototype chain
obj3.__proto__ = null;
// console.log(obj3.toString());
// This will throw error because now we broke the chain


// Why everything in JS is object

const arr = [1, 2, 3];
console.log(arr.__proto__);                 // Array.prototype
console.log(arr.__proto__.__proto__);       // Object.prototype

const string = "ThisIsAString";
console.log(string.__proto__);              // String.prototype
console.log(string.__proto__.__proto__);    // Object.prototype
