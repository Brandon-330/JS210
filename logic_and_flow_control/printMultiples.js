function logMultiples(n) {
  let counter = 100;
  counter = counter - (counter % n);

  while (counter >= n) {
    if (counter % 2 == 0) {
      counter -= n;
      continue;
    } else {
      console.log(counter);
      counter -= n;
    }
  }
}

logMultiples(17);
// output (5x, 3x and 1x)

logMultiples(21);
// output (3x and 1x)