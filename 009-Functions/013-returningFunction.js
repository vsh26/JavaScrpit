//  In JavaScript, functions can return other functions, enabling the creation of higher-order functions.

function square(){
    return function(number){
        return number * number;
    }
}

const solution = square();

console.log(solution(10));
