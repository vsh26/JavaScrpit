// toString() - returns function as string

function test1(a, b){

    for(i of arguments){
        console.log(i);
    }

    return arguments.length;
}

console.log(test1(1, 1));

console.log(test1.toString());