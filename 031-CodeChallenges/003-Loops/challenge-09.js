function shinyDiamondRug(n) {
  let pattern = "";

  let p1_rows = n,
    p2_rows = n - 1;

  for (let i = 1; i <= p1_rows; i++) {
    //spaces
    for (let j = 1; j <= p1_rows - i; j++) {
      pattern += " ";
    }

    //stars
    for (let j = 1; j <= 2 * i - 1; j++) {
      pattern += "*";
    }

    //newline
    pattern += "\n";
  }

  for (let i = 1; i <= p2_rows; i++) {
    //spaces
    for (let j = 1; j <= i; j++) {
      pattern += " ";
    }

    //stars
    for (let j = 1; j <= 2 * (p2_rows - i) + 1; j++) {
      pattern += "*";
    }

    //newline
    if (i != p2_rows) {
      pattern += "\n";
    }
  }

  return pattern;
}