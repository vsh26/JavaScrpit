/*
    Method 3: Constructor Function

        Sometimes we need to create many objects of the same type.
        To create such objects in JavaScript, we use a constructor function.

        This file demonstrates how to create objects using constructor functions in JavaScript.
        It shows how to:
            - Define a constructor function
            - Use `new` to create instances
            - Add properties directly to instances
            - Extend shared behavior using the prototype
*/

function Person(first, last, age, eye){

    // 'this' refers to the new object being created by 'new Person(...)'
    this.firstName = first;
    this.lastName = last;
    this.age = age;
    this.eyeColor = eye;

    // we can also give a default value to objects created by the constructor
    this.team = "The Avengers";
}

// Note:
// Inside the constructor function, 'this' initially has no value.
// When called with 'new', 'this' refers to the newly created object.


// Create new instances using 'new' keyword
const firstAvenger = new Person("Steve", "Rogers", 40, "blue");
const theConsultant = new Person("Tony", "Stark", 45, "black");


// Adding property to a specific OBJECT instance (not shared)
firstAvenger.weapon = {weaponName: "Shield", material: "Vibraniun", origin: "Wakanda"};

console.log(firstAvenger);
console.log(theConsultant);


// Adding property to CONSTRUCTOR's PROTOTYPE
// To add a new property, we must add it to the function prototype
// This way, all instances share the same behavior or data


// Shared property for all Person instances
Person.prototype.nationality = "American";

// Shared method for all Person instances
Person.prototype.fight = function(){
    return "Avengers! Assemble!";
}

console.log(firstAvenger.fight());
console.log(theConsultant.nationality);