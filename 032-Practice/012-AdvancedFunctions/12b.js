const add = function(){
    console.log(2+3);
}

const newFn = function(){
    console.log('12b');
}

function runTwice(fun){
    fun();
    fun();
}

runTwice(add);
runTwice(newFn);