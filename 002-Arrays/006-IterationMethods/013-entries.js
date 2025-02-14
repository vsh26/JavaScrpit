/*

    entries() method returns an Array Iterator object with key/value pairs

*/

const cars = ["Mercedes", "BMW", "Audi", "Porsche", "Rolls Royce", "Bugatti", "Lamborghini"];

const carEntries = cars.entries();

for (const car of carEntries) {
    console.log(car);
}