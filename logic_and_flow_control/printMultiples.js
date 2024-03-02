function logMultiples(n) {
  let counter = n;
  while (counter <= 100) {
    console.log(counter);
    counter += n;
  }
}

logMultiples(17);
// output (5x, 3x and 1x)

logMultiples(21);
// output (3x and 1x)