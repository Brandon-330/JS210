function runningTotal(array) {
  let sum = 0;
  for (let idx = 0; idx < array.length; idx += 1) {
    let num = array[idx];
    array[idx] = num + sum;
    sum += num;
  }

  return array;
}

console.log(runningTotal([2, 5, 13]));             // [2, 7, 20]
console.log(runningTotal([14, 11, 7, 15, 20]));    // [14, 25, 32, 47, 67]
console.log(runningTotal([3]));                    // [3]
console.log(runningTotal([]));                     // []