let fname = 'Tony';
let fname1 = fname; // (value of fname is copied here)

console.log(fname);
console.log(fname1);

fname1 = 'Bruce';

console.log(fname);
console.log(fname1);


let p1 = {
    firstName : 'Steve',
    lastName : "Rogers"
}

let p2 = p1; // (refernece of object is copied here)

console.log(p1);
console.log(p2);

p2.firstName = 'Peter';
console.log(p1);
console.log(p2);

// Object is created in heap, and pointer to it is stored in stack

// Here we used same meomry, but two pointers


// 

let p3 = {
    firstName : 'Nick',
    lastName : 'Fury',
    address : {
        houseNo : 100,
        streetNo: 12,
        country: 'USA'
    }
};

let p4 = {
    firstName : p3.firstName,
    lastName : p3.lastName,
};

p4.firstName = 'Phil';
p4.lastName = 'Coulson';
console.log(p3);
console.log(p4);


let p5 = {
    ...p3 // Spread Opereator -> only works on first level objects (shallow copy), does not work for nested objects
}
console.log(p3);
console.log(p5);

p5.firstName = 'Leopold';
p5.lastName = 'Fitz';
p5.address.houseNo = 'Hacked';


console.log(p3);
console.log(p5);

// Deep Copy
// Convert Object -> String -> Copy String -> Convert copied string to object

let p6 = {
    firstName : 'Jemma',
    lastName : 'Simmons',
    address : {
        houseNo : 300,
        streetNo: 30,
        country: 'UK'
    }
};

const p6KaString = JSON.stringify(p6);  // Object -> String (Serialization)
console.log(p6KaString);
let p7 = JSON.parse(p6KaString);        // String -> Object (Deserialisation)

p7.firstName = 'Melinda';
p7.lastName = 'May';
p7.address.houseNo = 301;
p7.address.streetNo = 40;
p7.address.country = 'Russia';

console.log(p6);
console.log(p7);

