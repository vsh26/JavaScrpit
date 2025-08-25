/*
    If amount >= 1000, give 10% discount
*/

function calculateTotalBill(amount){
    if(amount >= 1000){
        return amount * 0.9;
    }

    return amount;

    // ternary operators
    // return amount >= 1000 ? amount * 9 : amount;
}

const total = calculateTotalBill(1200);
console.log(total);

console.log(calculateTotalBill(900));


/*
    Traffic Light System
*/

function trafficLight(color){

    const colorStr = color.toLowerCase();

    switch(colorStr){
        case "red":
            console.log("Stop");
            break;

        case "green":
            console.log("Go");
            break;

        case "yellow":
            console.log("Go slow");
            break;

        default :
            console.log("Follow what traffic police says");
    }
}

trafficLight("Yellow");

/*
    Truthy Falsy
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
