/*
Assignment

Problem Statement:
In many applications, data is stored in deeply nested objects. Accessing a property from a deeply nested object requires multiple checks to avoid errorrs.  Instead of manually checking each level, we need a function that safely retrives a value from nested object using a dot-seperated key path

Challenge:
Write a function that takes a nested object and a key-path string (e.g., "user.address.city") and returns the value. If any part of the path is missing, return "Key not found"

Constraints:
- The input object should be valid
- The key path should be a string with dot notation (.) seperating keys
- If a key is missing, return "Key not found"
- The function should handle deeply nested objects

*/

function getNestedValue(obj, keyPath) {

    const pathArray = keyPath.split(".");
  
    for (let i = 0; i < pathArray.length; i++) {
      if ((obj === null) || (obj[pathArray[i]] === undefined)){
        return "Key not found";
      }
      obj = obj[pathArray[i]];
    }
  
    return obj; 
}


// For testing
const person = {
    firstName: 'Tony',
    lastName: 'Stark',
    superhero: 'Iron Man',
    powerSource: 'Arc Reactor',
    suits: [ 'Mark 1', 'Mark 10', 'Mark 42' ],
    industry: {
      name: 'Stark Industires',
      doamin: 'Engineering',
      people : {
        CEO : "Pepper Pots",
        founder : "Howard Stark"
      }

    }
}

const result = getNestedValue(person, "industry.people.founder");
console.log(result);


// Garbage Collector
// - no control
// - runs in back ground