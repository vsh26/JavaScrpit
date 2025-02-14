/*

    The for...in statement iterates over all enumerable string properties of an object (ignoring properties keyed by symbols), including inherited enumerable properties.


    Syntax:
        for (const key in object) {
            if (Object.prototype.hasOwnProperty.call(object, key)) {
                const element = object[key];
                for(const car in carPrices){
                    console.log(car);
                }
            }
        }

*/

const carPrices = {
    "Mercedes" : 10000000,
    "BMW" : 20000000,
    "Audi" : 30000000,
    "Land Rover" : 40000000
}

for (const car in carPrices) {
    console.log(car);               // Accessing the key
    console.log(carPrices[car]);    // Accessing the value aasociated with current key
}

let cheaperCars = {}
for (const car in carPrices) {
    if(carPrices[car] < 40000000){
        cheaperCars[car] = carPrices[car];
    }
}
console.log(cheaperCars);
