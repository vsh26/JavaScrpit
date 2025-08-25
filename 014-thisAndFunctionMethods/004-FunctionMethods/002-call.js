/*

call() - The call() method is used to call a function and explicitly set the value of this. We can also pass arguments individually.

Syntax:
  func.call(thisArg, arg1, arg2, ...)

Summary:
  - Invoke a function immediately
  - Explicitly set what this refers to
  - Pass arguments individually
  - Returns the result of the original function

*/


// Exa 1:
const ironMan = {
  name: "Tony Stark",
  sayHi: function () {
    console.log("Hi, I am " + this.name);
  }
};

ironMan.sayHi();    // "Hi, I am Tony Stark"

const say = ironMan.sayHi;
say();              //"Hi, I am undefined"

say.call(ironMan); // "Hi, I am Tony Stark"


// Exa 2:
const person = {
    fullName : function(){
        return this.firstName + " " + this.lastName;
    },
    fullInfo : function(city, country){
        return this.firstName + " " + this.lastName + ", " + city + ", " + country;
    } 
};

const person1 = {
    firstName: "Tony",
    lastName : "Stark"
}

const person2 = {
    firstName: "Bruce",
    lastName: "Banner"
}

console.log(person.fullName.call(person1));   // Tony Stark
console.log(person.fullInfo.call(person1, "New York", "USA"));  // Tony Stark, New York, USA