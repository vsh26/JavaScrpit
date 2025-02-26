/*

    filter() method creates a new array with array elements that pass a test.
    
*/

const cars = ["Mercedes", "BMW", "Audi", "Porsche", "Rolls Royce", "Bugatti", "Lamborghini"];

const longCars = cars.filter(car => car.length >= 5);
console.log(longCars);


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