/*
    calculate total sales
*/

let SalesData = [
    { product: "Laptop", price: 1200 },
    { product: "Smartphone", price: 800 },
    { product: "Headphones", price: 150 },
    { product: "Keyboard", price: 80 }
];

// Method 1: Using loops

let total = 0;
for(sale of SalesData){
    total += sale.price;
}
console.log(total);

// Method 2: using reduce

const totalSales = SalesData.reduce((acc, sale) => acc + sale.price, 0);
console.log(totalSales);



/*

    inventory < 50 (low stock items). Get low stock items

*/

let inventory = [
    { name: "Widget A", stock: 30 },
    { name: "Widget B", stock: 120 },
    { name: "Widget C", stock: 45 },
    { name: "Widget D", stock: 70 }
];

// using filter()

const lowStockItems = inventory.filter((item) => item.stock < 50 );
console.log(lowStockItems);



/*

    Find most active user

*/

let userActivity = [
    { user: "Alice", activityCount: 45 },
    { user: "Bob", activityCount: 72 },
    { user: "Charlie", activityCount: 33 }
];

// only use reduce

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

/*

    Find the pending tasks according to thier priority

*/

let tasks = [
    { description: "Write Email", completed: false, priority: 2},
    { description: "Send Email", completed: true, priority: 3},
    { description: "Prepare presentation", completed: false, priority: 1}
];

const pendingSortedTasks = tasks
    .filter((task) => !(task.completed))
    .sort((a, b) => a.priority - b.priority);

console.log(pendingSortedTasks);


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