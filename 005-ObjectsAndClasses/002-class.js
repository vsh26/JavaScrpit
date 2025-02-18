class Person {

    // Parameterized Constructor
    constructor(fname, lname){
        this.fname = fname;
        this.lname = lname;
    }

    //  If we don't write a constructor, Deafult Constructor is initialized
    //  constructor(){
    //  }
 
    getFullName(){
        return `${this.fname} ${this.lname}`;
    }
}

const p1 = new Person("Tony", "Stark");
const p2 = new Person("Bruce", "Banner");

console.log(p1.getFullName());
console.log(p2.getFullName());

console.log(Person.prototype);      // Object
console.log(p1.__proto__);          // Object

// Here we let JavaScript handled the prototype by itself
// Whenever we create a new object (say obj1), it gets the prototype from Person class
// __p1.proto__ = Person.prototype

// Since, __proto__ of obj1 and obj2 are same. We say that obj1 and obj2 belong to same class


// Code looks clean now - Syntax Sugar