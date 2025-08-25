// You just need to implement the workingDays function
function workingDays(days) {
  let count = 0;

  for (let i = 0; i < days.length; i++) {
    if (days[i] === "Saturday" || days[i] === "Sunday") {
      continue;
    } else {
      count++;
    }
  }

  return count;
}