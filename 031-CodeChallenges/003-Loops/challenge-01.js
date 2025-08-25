// You just need to implement the distributeGifts function
function distributeGifts(totalGifts, friends) {
  
  if (totalGifts <= friends) {
    return totalGifts;
  } else {
    return friends;
  }
}