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


/*

    Find average rating for each movie

*/

let movieRatings = [
    { title: "Movie A", ratings: [4, 5, 3]},
    { title: "Movie B", ratings: [5, 5, 4]},
    { title: "Movie C", ratings: [3, 4, 2]}
];

let averageRatings = movieRatings.map((movie) => {
    let sum = movie.ratings.reduce((acc, curr) => acc + curr, 0);
    let average = sum/movie.ratings.length;

    return {title: movie.title, averageRatings: average.toFixed(2)};
});

console.log(averageRatings);