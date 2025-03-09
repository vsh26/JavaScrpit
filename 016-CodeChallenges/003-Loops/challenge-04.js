// You just need to implement the totalWater function
function totalWater(waterAmounts) {
  let totalAmount = 0;

  for (let i = 0; i < waterAmounts.length; i++) {
    totalAmount = totalAmount + waterAmounts[i];
  }

  return totalAmount;
}