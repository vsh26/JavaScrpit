/*  

    forEach() method executes a provided function (a callback function) once for EACH array element.

    Syntax:
        array.forEach(element => {
    
        });

        - element is the parameter of the function

        OR

        array.forEach(function(element) {
    
        });

*/

const cars = ["Mercedes", "BMW", "Audi", "Porsche", "Rolls Royce", "Bugatti", "Lamborghini"];

// Accessing the elements
cars.forEach(car => {
    console.log(car);
});


// Find luxorious car ("Rolls Royce")
let luxoriousCar = "";

cars.forEach(car => {
    if(car === "Rolls Royce"){
        luxoriousCar = car;
    }
});

console.log(luxoriousCar);


// Find non-luxorious car (all except "Rolls Royce")
let nonLuxoriousCars = [];

cars.forEach(car =>{
    if(car === "Rolls Royce"){
        return;
    }else{
        nonLuxoriousCars.push(car);
    }
});

console.log(nonLuxoriousCars);