// Problem: Create an object representing a type of tea with properties for name, type and caffeine content
const tea = {
    teaName : "Lemon Tea",
    teaType : "Green Tea",
    caffineContent : "Low"
}

// Problem: Accesss and print the name and type properties of the tea object
console.log(tea.teaName);
console.log(tea["teaType"]);

// Problem: Add a new property origin to the tea object
tea.origin = "Assam";
console.log(tea);

// Problem: Change the caffeine level of the tea object to 'medium'
tea.caffineContent = "Medium";
console.log(tea);

// Problem: Remove the type property from the tea object
delete tea.teaType;
console.log(tea);

// Problem: Check if tea object has a property origin
console.log("origin" in tea);

// Problem: Use for...in loop to print all properties of the tea object
for (const key in tea) {
    console.log(`${key} : ${tea[key]}`);
}

// Problem: Create a nested object representing different types of teas and their properties
const myTeas = {
    greenTea : {
        teaName : "Green Tea",
        cups : {
            one : "1",
            two : "2"
        }
    },
    blackTea : {
        teaName : "Black Tea"
    }
}

// Problem : Create a copy of tea object

// Shallow Copy
const teaCopy = {
    ...myTeas
}   // shallow copy (only first level keys are copied)
console.log(teaCopy);

// Reference
const anotherCopy = myTeas; // Passing reference (anotherCopy is a reference)

// Deep Copy
const myTeasString = JSON.stringify(myTeas);
const myTeasCopy = JSON.parse(myTeasString);

console.log(myTeasCopy);

// Problem : Add a custom method describe to the tea object that returns a description string
// Problem : Merge two objects representing different teas into one
