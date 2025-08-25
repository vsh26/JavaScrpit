/*

    keys() method returns an Array Iterator object with the keys of an array

*/

const cars = ["Mercedes", "BMW", "Audi", "Porsche", "Rolls Royce", "Bugatti", "Lamborghini"];

const carKeys = cars.keys();

for (const key of carKeys) {
    console.log(key);
}

