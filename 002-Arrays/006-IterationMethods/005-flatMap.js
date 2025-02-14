/*

    flatmap() method first maps all elements of an array and then creates a new array by flattening the array

    combination of map() and flat()

*/

const cars = ["Mercedes", "BMW", "Audi", "Porsche", "Rolls Royce", "Bugatti", "Lamborghini"];

const newCars = cars.flatMap(car => {
    return car.padStart(car.length+3, "new");
});

console.log(newCars);