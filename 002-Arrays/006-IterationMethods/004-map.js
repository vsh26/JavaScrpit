/*
    map() method creates a new array, with the results of calling function, on EACH element of array

*/

const cars = ["Mercedes", "BMW", "Audi", "Porsche", "Rolls Royce", "Bugatti", "Lamborghini"];

// Find non-luxorious car (all except "Rolls Royce")

const mapCars = cars.map(car =>{
    if(car !== "Rolls Royce"){
        return car;
    }
});

console.log(mapCars);