function invoiceTotal(...args) {
  let sum = 0;
  for (let idx = 0; idx < args.length; idx += 1) {
    sum += args[idx];
  }

  return sum;
}

console.log(invoiceTotal(20, 30, 40, 50));          // works as expected
console.log(invoiceTotal(20, 30, 40, 50, 40, 40));  // does not work; how can you make it work?