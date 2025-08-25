/*
    map() method creates a new array, with the results of calling function, on EACH element of array

    Syntax:

        array.map(callbackFunction());

            - Parameter: Callback function
            - Returns: A new array, where each element is the return value of callback
            - Original Array: No change

*/

const nums = [1, 2, 3, 4, 5, 6, 7 , 8, 9, 10];


// Exa: Multiplication table of 5

const tableOf5 = nums.map((num) => {
    return 5*num;
});

console.log(tableOf5);


/*

    Exa: Find average rating for each movie

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