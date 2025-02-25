/*

    reduce() method runs a function a on EACH array element to produce (reduce it to) a single value.
    It works from LEFT-to-RIGHT

    Syntax:

        arr.reduce(function(accumulator, current), initialValue)

        accumulator - The value resulting from the previous call to callbackFn. On the first call, its value is initialValue if the latter is specified; otherwise its value is array[0].

        current - The value of the current element. On the first call, its value is array[0] if initialValue is specified; otherwise its value is array[1]

    Exa:
        const initialValue = 0;
        const numbers = [1, 2, 3, 4, 5];

        arr.reduce(function(accumulator, current), initialValue)

        -> accumulator = initial value
        -> current     = numbers[0]

    Exa:

        arr.reduce(function(accumulator, current))

        -> accumulator = numbers[0]
        -> current     = numbers[1]

*/

// Use Case 1: Sum of aaray elements

const initialValue = 0;
const numbers = [1, 2, 3, 4, 5];

const sum = numbers.reduce((sum, current) => {
    return sum + current
}, initialValue);

console.log(sum);   // 15


// Use Case 2: Flattening an Array of Arrays

let nestedArray = [[1, 2], [3, 4], [5, 6]];

let flattened = nestedArray.reduce((accumulator, currentValue) => {
    return accumulator.concat(currentValue);
}, []);

console.log(flattened); // [1, 2, 3, 4, 5, 6]


// Use Case 3: Counting Occurrences

let fruits = ['apple', 'banana', 'orange', 'apple', 'banana', 'apple'];

let count = fruits.reduce((accumulator, currentValue) => {
    if (accumulator[currentValue]) {
        accumulator[currentValue]++;
    } else {
        accumulator[currentValue] = 1;
    }
    return accumulator;
}, {});

console.log(count); // { apple: 3, banana: 2, orange: 1 }


/*
    Calculate total sales
*/

let SalesData = [
    { product: "Laptop", price: 1200 },
    { product: "Smartphone", price: 800 },
    { product: "Headphones", price: 150 },
    { product: "Keyboard", price: 80 }
];

const totalSales = SalesData.reduce((acc, sale) => acc + sale.price, 0);
console.log(totalSales);



/*

    Find most active user

*/

let userActivity = [
    { user: "Alice", activityCount: 45 },
    { user: "Bob", activityCount: 72 },
    { user: "Charlie", activityCount: 33 }
];

let mostActiveUser = userActivity.reduce((maxUser, user) =>
    user.activityCount > maxUser.activityCount ? user : maxUser
);

console.log(mostActiveUser);