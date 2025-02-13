// Problem: Create an array containing diff. types of teas
const teas = ["Greean tea", "Black tea", "Oolong tea", "White tea", "Herbal tea"];
console.log(teas);

// Problem: Add "Chamomile tea" to the existing list of teas
teas.push("Chamomile tea");
console.log(teas);

// Problem: Remove "Oolong tea" from the list of teas
const index = teas.indexOf("Oolong Tea");
if(index > -1){
    teas.splice(index, 1);
}

console.log(teas);

// Problem: Filter the list to only include teas that are caffinated
const caffinatedTeas = teas.filter((tea) => tea != "Herbal tea");
console.log(caffinatedTeas);

// Problem: Sort the list of teas in alphabetical order
console.log(teas.sort());

// Problem: Use a for loop to print each type of tea in array
for(let i = 0; i < teas.length; i++){
    console.log(teas[i]);
}

// Problem: Use a for loop to count how many teas are caffinated (excluding "Herbal tea")
let caffinatedCount = 0;
for(let i = 0; i < teas.length; i++){
    if(teas != "Herabl tea"){
        caffinatedCount++;
    }
}
console.log(caffinatedCount);

// Problem: Use a for loop to create a new array with all tea names in uppercase
const upperCaseTeas = [];
for(let i = 0; i < teas.length; i++){
    upperCaseTeas.push(teas[i].toUpperCase());
}
console.log(upperCaseTeas);

// Problem: Use a for loop to find tea name with the most characters
let longestTea = "";

for(let i = 0; i < teas.length; i++){
    if(teas[i].length > longestTea.length){
        longestTea = teas[i];
    }
}

console.log(longestTea);

// Problem: Use a for loop to reverse the order of teas in the array
const reversedArray = []
for(let i = teas.length-1; i >=0; i--){
    reversedArray.push(teas[i]);
}

console.log(reversedArray);