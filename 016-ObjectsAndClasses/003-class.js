class Person {

    // Parameterized Constructor
    constructor(fname, lname){
        this.fname = fname;
        this.lname = lname;
    }

    // If we don’t define a constructor explicitly,
    // JavaScript provides a default one automatically.
    // constructor() {}

    // method
    getFullName(){
        return `${this.fname} ${this.lname}`;
    }
}

const p1 = new Person("Tony", "Stark");
const p2 = new Person("Bruce", "Banner");

console.log(p1.getFullName());
console.log(p2.getFullName());

console.log(Person.prototype);          // Person.prototype
console.log(p1.__proto__);              // Person.prototype
console.log(p1.__proto__.__proto__);    // Object.prototype
console.log(p1.__proto__.__proto__.__proto__);  // null
 

// Inspecting the prototype
console.log(Person.prototype === p1.__proto__); // true
console.log(Person.prototype === p1.__proto__.__proto__); // false


// JavaScript automatically sets:
// p1.__proto__ === Person.prototype
// p2.__proto__ === Person.prototype

// This is why both p1 and p2 can access getFullName()
// without duplicating the function in memory.

// Since, __proto__ of obj1 and obj2 are same. We say that obj1 and obj2 belong to same class


// Code looks clean now
// Class in JS is just syntactic sugar over constructor functions + prototype chaining
