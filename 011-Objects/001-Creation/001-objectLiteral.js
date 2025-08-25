/*
    Ways to define a JavaScript Object:
        - using an Object literal
        - using new keyword
        - using an constructor function

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

    // If both firstName and lastName are in the same object, why do we need this.firstName and this.lastName? Why not just write name inside getFullName?

    // Even though getFullName is a property of tony, the function itself doesn’t automatically get access to other properties like name as local variables.
    // JavaScript does not "merge" object properties into function scope.
    // So firstName and lastName are not available directly. You must access them through the object — and that's what 'this' does.


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
// The delete keyword removes both the property and its value from the object
delete person.address;
console.log(person);


// Exa:
const remote ={
    color : 'black',
    brand : 'Samsung',
    dimensions : {
        height : 1,
        width : 1
    },
    turnOn : function(){
        console.log("Remote is now ON");
    },
    turnOff : function(){
        console.log("Remote is now OFF");
    }
};

console.log(remote);

// Exa:
const car = {};

car.brand = "Land Rover";
car.model = "Range Rover";
car.color = "Black";
car.start = function(){
    return"Starting the car!";
};

console.log(car);
console.log(car.start());
