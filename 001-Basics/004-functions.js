function addition(a, b){
    return a + b;
}

// a, b are parameters of the function

// 10, 5 are arguments passed into the function
let sum = addition(10, 5);
console.log(sum);

// Arrow functions -> compact alternative to write functions

let traditionalHello = "";

traditionalHello = function(){
    return "Hello Traditional World";
}

console.log(traditionalHello());


let arrowHello = "";

arrowHello = () => {
    return "Hello Arrow World"
}

console.log(arrowHello());


subtraction = (a, b) => a - b;
console.log(subtraction(10, 5));

multiplication = (a, b) => a*b;
console.log(multiplication(10, 5));

division = (a, b) => a/b;
console.log(division(10, 5));

remainder = (a, b) => a%b;
console.log(remainder(10, 5));

tableGeneratorFunction = (num) => {
    for(let i = 1; i <= 10; i++){
        console.log(num*i);
    }
}

tableGeneratorFunction(10);