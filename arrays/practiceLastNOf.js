function lastNOf(arr, count) {
  let idx = arr.length - count;
  if (idx < 0) idx = 0;
  return arr.slice(idx)
}

let digits = [4, 8, 15, 16, 23, 42];
console.log(lastNOf(digits, 8));    // returns [16, 23, 42]