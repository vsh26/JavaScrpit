/*

    - const
    - Object.preventExtensions(object)
    - Object.isExtensible(object)
    - Object.seal(object)
    - Object.isSealed(object)
    - Object.freeze(object)
    - Object.isFrozen(object)

*/

// const - prevents re-assignment (can still change the value of a property, delete a property or create a new property)
const person = {
    firstName: 'Tony',
    lastName: 'Stark',
    superhero: 'Iron Man',
    powerSource: 'Arc Reactor',
    suits: [ 'Mark 1', 'Mark 10', 'Mark 42' ],
    industries: {
      name: 'Stark Industires',
      doamin: 'Engineering',
      CEO: 'Pepper Pots',
      owner: 'Tony Strak'
    }
}


// Object.preventExtensions(object)
// prevents new properties from ever being added to an object. It also prevents the object's prototype from being re-assigned.
Object.preventExtensions(person);

// Object.defineProperty(person, "car", {value : "R8"}); -> TypeError


// Object.isExtensible(object)
// Returns true if properties can be added to an object
console.log(Object.isExtensible(person));


// Object.seal(object)
// Sealing an object prevents extensions and makes existing properties non-configurable. A sealed object has a fixed set of properties: new properties cannot be added, existing properties cannot be removed, their enumerability and configurability cannot be changed, and its prototype cannot be re-assigned. Values of existing properties can still be changed as long as they are writable. seal() returns the same object that was passed in.


// Object.isSealed(object)
// returns true if object is sealed


// Object.freeze(object)
// prevents extensions and makes existing properties non-writable and non-configurable. A frozen object can no longer be changed: new properties cannot be added, existing properties cannot be removed, their enumerability, configurability, writability, or value cannot be changed, and the object's prototype cannot be re-assigned. freeze() returns the same object that was passed in.


// Object.isFrozen()
// returns true if an object is frozen.
