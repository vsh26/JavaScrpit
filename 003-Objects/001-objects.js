/*
    Ways to define a JavaScript Object:
        - using an Object literal
        - using new keyword
        - using an object constructor

*/

// Method 1: Object literal (key: value pairs inside {})

const person = {
    firstName : 'Tony',
    lastName : 'Stark',
    hobbies : ['Coding', 'Reading'],
    isIronMan : true,

    // object method
    getFullName: function(){
        return `${this.firstName} ${this.lastName}`;
    },

    // nested object
    address : {
        houseNo: 3000,
        street: 10,
        countryCode: 'IN',
        state : 'MH'
    }
};

console.log(person);

// Accessing object properties

console.log(person.firstName);
console.log(person["firstName"]);
console.log(person.getFullName());  // Accessing method of the object person
console.log(person.address);
console.log(person["address"]);
console.log(person.address.houseNo);
console.log(person.address["houseNo"]);

// Adding new property
person.nickName = "The Consultant";
console.log(person);

// Deleting a property
// delete keyword, deletes both the value of the property and the property itself
delete person.address;
console.log(person);


const remote ={
    color : 'black',
    brand : 'Samsung',
    dimensions : {
        height : 1,
        width : 1
    },
    turnOn : function(){

    },
    turnOff : function(){

    }
};

console.log(remote);

const car = {};

car.brand = "Land Rover";
car.model = "Range Rover";
car.color ="Black";

console.log(car);


// Method 2: Using new Object()

const laptop = new Object();

laptop.brand = "Apple";
laptop.model = "MacBook Pro 14 Inch";
laptop.properties = {chipset: "M3", RAM: "16 GB", color: "Space Grey"};

console.log(laptop);


// Method 3: Object Constructor
// Sometimes we need to create many objects of the same type.
// To create an object type we use an object constructor function.

function Person(first, last, age, eye){
    this.firstName = first;
    this.lastName = last;
    this.age = age;
    this.eyeColor = eye;

    // we can also give a default value to objects created by the constructor
    this.team = "The Avengers";
}

// In constructor function, this has no value
// When new object is created, this will point to that particular object

const firstAvenger = new Person("Steve", "Rogers", 40, "blue");
const theConsultant = new Person("Tony", "Stark", 45, "black");

// Adding property to object
firstAvenger.weapon = {weaponName: "Shield", material: "Vibraniun", origin: "Wakanda"};

console.log(firstAvenger);
console.log(theConsultant);


// Adding property to constructor

// We cannot add a new property to object constructor
// To add a new property, we must add it to the constructor function prototype

Person.prototype.nationality = "American";

Person.prototype.fight = function(){
    return "Avengers! Assemble!";
}

console.log(firstAvenger.fight());
console.log(theConsultant.nationality);

// Destructuring

const obj ={
    
    greetMsg : 'Hello',
    message: 'Good Job!'

}

// const greetMsg = obj.greetMsg;
// const message = obj.message;

const {greetMsg, message} = obj;

console.log(greetMsg);  // 'Hello'
console.log(message);   // 'Good Job!'
