/*
    Method 2: Using new Object()

    This method uses the Object constructor to create an empty object.
    You can then add properties dynamically using dot notation.
*/

const laptop = new Object();

laptop.brand = "Apple";
laptop.model = "MacBook Pro 14 Inch";
laptop.properties = {chipset: "M3", RAM: "16 GB", color: "Space Grey"};

// Accessing properties
console.log(laptop);
console.log(laptop.properties.chipset);  // M3
console.log(laptop["properties"]["RAM"]);  // 16 GB


// Adding a method
laptop.getSpecs = function() {
    return `${this.brand} ${this.model} with ${this.properties.RAM} RAM`;
};

console.log(laptop.getSpecs()); // Apple MacBook Pro 14 Inch with 16 GB RAM
