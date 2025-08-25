// You just need to implement the filterHealthy function
function filterHealthy(foodList) {
  // Remove unhealthy food and return updated list
  let newlist = [];

  for (let i = 0; i < foodList.length; i++) {
    if (foodList[i] != "Burger") {
      newlist.push(foodList[i]);
    }
  }

  return newlist;
}