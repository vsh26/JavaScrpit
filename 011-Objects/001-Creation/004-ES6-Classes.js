/*
    Method 4: ES6 Class

    A class is a blueprint for creating objects with shared structure and behavior.

    This file demonstrates how to create objects using the modern ES6 class syntax in JavaScript.
    It shows how to:
        - Define a class with a constructor
        - Create instances using `new`
        - Add properties and methods
        - Use class fields for shared/default data
*/

class Person {

    constructor(first, last, age, eye) {
        this.firstName = first;
        this.lastName = last;
        this.age = age;
        this.eyeColor = eye;

        // Assign default property
        this.team = "The Avengers";
    }

    // Method shared by all instances
    fight() {
        return "Avengers! Assemble!";
    }
}

// Create new instances using 'new' keyword
const firstAvenger = new Person("Steve", "Rogers", 40, "blue");
const theConsultant = new Person("Tony", "Stark", 45, "black");

// Add custom property to specific OBJECT (not shared)
firstAvenger.weapon = { weaponName: "Shield", material: "Vibranium", origin: "Wakanda" };

console.log(firstAvenger);
console.log(theConsultant);


// Adding a shared property
Person.prototype.nationality = "American";


// Adding a shared method
Person.prototype.greet = function(){
    return "Welcome to S.H.I.E.L.D";
}

console.log(firstAvenger.greet());
console.log(theConsultant.nationality);
