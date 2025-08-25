/*

    reduce() method runs a function a on EACH array element to produce (reduce it to) a single value.
    It works from LEFT-to-RIGHT

    Syntax:

        arr.reduce(callbackFunction(accumulator, current), initialValue);

        accumulator - The value resulting from the previous call to callbackFn.
                    - On the first call, its value is initialValue if the latter is specified; otherwise its value is array[0].

        current - The value of the current element.
                - On the first call, its value is array[0] if initialValue is specified; otherwise its value is array[1]

            - Parameters: callbackFunction, initialValue
            - Returns: a single value
            - Original array: No change

    Exa:
        const initialValue = 0;
        const numbers = [1, 2, 3, 4, 5];

        arr.reduce(callbackFunction(accumulator, current), initialValue);

        -> accumulator = initial value
        -> current     = numbers[0]

    Exa:

        arr.reduce(callbackFunction(accumulator, current))

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
    Exa: Calculate total sales
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


/*
    category-wise bill (Total of food, total of utilities)
*/

let expenses = [
    { description : "Groceries" , amount : 50, category : "Food"},
    { description : "Electricity Bill", amount : 100, category : "Utilities"},
    { description : "Dinner", amount : 30, category : "Food"},
    { description : "Internet Bill", amount : 50, category : "Utilities"}
];

// This code is static
const expenseReport = expenses.reduce(
    (report, expense) => {
        report[expense.category] += expense.amount;
        return report;
    },
    {Food : 0, Utilities: 0}
);

console.log(expenseReport);


// Dynamic (if we don't know the categories)
const dynamicExpenseReport = expenses.reduce(
    (report, expense) => {
        report[expense.category] = (report[expense.category] || 0) + expense.amount;
        return report;
    },
    {}
);

console.log(dynamicExpenseReport);