// Arrays

let chaiTypes = ["Masala Chai", "Ginger Chai", "Green Tea", "Lemon Tea"];

console.log(`Total chai types: ${chaiTypes.length}`);
console.log(chaiTypes[1]);

// Important array methods
// .push(value)     -> add the element to the end of the array
// .pop()           -> removes the element from the last index of the array, returns the poopped element
// .splice()        -> add elements to array
// .forEach()
// .concat()

let newChaiTypes = [...chaiTypes, "Chamolina Tea", "Oolong Tea"];
console.log(newChaiTypes);


// Objects
let chaiReceipe = {
    name: "Masala Chai",
    ingredients: {
        teaLeaves: "Assan Tea",
        milk: "Full cream milk",
        sugar: "Brown sugar",
        spices: ["Daalchini", "Ginger"]
    },
    instruction: "Boil water, add tea leaves, milk, sugar and spices"
};

console.log(chaiReceipe);
console.log(chaiReceipe.ingredients.spices[1]);

let updatedChaiReceipe = {
    ...chaiReceipe,
    instruction: "Boil water, add tea leaves, milk, sugar, spices with love"    // overriding
};

console.log(updatedChaiReceipe);

// Destructuring assignment
let {name, ingredients} = chaiReceipe;  
let [firstChai, secondChai] = chaiTypes;

let {myName, myIngredients} = chaiReceipe;    

console.log(ingredients);
console.log(myIngredients);                 // undefined


// let [value, setValue] = useState()