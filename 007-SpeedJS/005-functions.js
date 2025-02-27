function greet(name) {
    console.log(`Hello ${name}`);
}

greet("Iron Man");

// Scope of this variable is global
let globalVar = "I am global";

function modifyGlobal(){
    globalVar = "I am modified";

    let blockScopedVar = "I am block-scoped";
}


// IIFE - Immidiately Invoked Function Expression 
let config = (function () {
    let settings = {
      theme: "dark",
    };
    return settings;
})();


// call()

let person1 = {
    personName: "Tony",
    greet: function(){
        console.log(`Hello, ${this.personName}`);
    }
};

let person2 = {
    personName: "Steve"
};

person1.greet();
person1.greet.call(person2);

const bindGreet = person1.greet.bind(person2); // returns a function
console.log(bindGreet);         // person1.greet.call(person2);
console.log(bindGreet());       // Hello Steve
                                //undefined
bindGreet();

