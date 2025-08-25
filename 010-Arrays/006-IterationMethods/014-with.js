/*

    with() method is a safe way to update elements in an array without altering the original array

*/

const cars = ["Mercedes", "BMW", "Audi", "Porsche", "Rolls Royce", "Bugatti", "Lamborghini"];

const updatedCars = cars.with(0, "Mercedes Benz");

console.log(updatedCars);