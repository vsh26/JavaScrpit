function add() {
    let counter = 0;
    function plus(){
        return counter += 1;
    }
    plus();   
    return counter;
}

console.log(add()); // 1