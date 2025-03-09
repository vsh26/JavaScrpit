function invertedMountain(n) {
  let res = "",
    flag = 0,
    str = "*";
  for (let i = n; i >= 1; i--) {
    res += str.repeat(i);
    if (i == 1) {
      flag = 1;
    }
    if (flag != 1) {
      res += "\n";
    }
  }
  return res;
}
