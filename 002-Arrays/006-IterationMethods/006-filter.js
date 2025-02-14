/*

    filter() method creates a new array with array elements that pass a test.
    
*/

const cars = ["Mercedes", "BMW", "Audi", "Porsche", "Rolls Royce", "Bugatti", "Lamborghini"];

const longCars = cars.filter(car => car.length >= 5);
console.log(longCars);