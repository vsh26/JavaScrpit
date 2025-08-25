// --------- Ternary operators ( ?  : ) ----------

function calculateTotalBill(amount){

    return amount >= 1000 ? amount * 0.9 : amount;
}

const total = calculateTotalBill(1200);
console.log(total);

console.log(calculateTotalBill(900));