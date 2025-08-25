/*
    Truthy Falsy

    falsy
        - undefined
        - null
        - 0
        - false
        - NaN
        - ''

    truthy
        - anything which is non-falsy
*/

function checkTruthyValue(value){
    if(value){
        console.log("Truthy");
    }else{
        console.log("Falsy");
    }
}

checkTruthyValue(1);            // Truthy
checkTruthyValue(0);            // Falsy
checkTruthyValue(-1);           // Truthy
checkTruthyValue(10);           // Truthy
checkTruthyValue(-10);          // Truthy
checkTruthyValue(1.2);          // Truthy
checkTruthyValue(-1.2);         // Truthy
checkTruthyValue("abc");        // Truthy
checkTruthyValue("");           // Falsy
checkTruthyValue(true);         // Truthy
checkTruthyValue(false);        // Falsy
checkTruthyValue(null);         // Falsy
checkTruthyValue(undefined);    // Falsy
checkTruthyValue([]);           // Truthy
checkTruthyValue([0]);          // Truthy
checkTruthyValue([1, 2, 3]);    // Truthy
checkTruthyValue({});           // Truthy
checkTruthyValue({a: 1, b:2});  // Truthy