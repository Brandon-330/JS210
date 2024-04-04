function sumSquareDifference(n) {
  let sum = 0;
  let squaredSum = 0;
  for (let counter = 1; counter <= n; counter += 1) {
    sum += counter;
    squaredSum += counter ** 2;
  }

  return sum**2 - squaredSum;
}

console.log(sumSquareDifference(3));      // 22 --> (1 + 2 + 3)**2 - (1**2 + 2**2 + 3**2)
console.log(sumSquareDifference(10));     // 2640
console.log(sumSquareDifference(1));      // 0
console.log(sumSquareDifference(100));    // 25164150