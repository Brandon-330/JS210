function product(...numbers) {
  return numbers.reduce((total, number) => total * number);
}

let result = product(2, 3, 4, 5);

function product2() {
  let sum = 0
  for (let idx = 0; idx < arguments.length; idx += 1) {
    sum += arguments[idx];
  }

  return sum;
}

console.log(product2(2, 3, 4, 5));