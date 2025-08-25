// Function in Arrays

const arr = [
    function(a, b){
        return a+b;
    },
    function(a, b){
        return a-b;
    },
    function(a, b){
        return a*b;
    },
    function(a, b){
        return a/b;
    }
];

let first = arr[0];
let ans = first(2, 10);
console.log(ans);