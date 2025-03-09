// You just need to implement the totalStars function
function totalStars(starLevels) {
  let count = 0;
  for (let i = 0; i < starLevels.length; i++) {
    count = count + starLevels[i].length;
  }
  return count;
}