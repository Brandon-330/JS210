function oddElementsOf(arr) {
  let newArr = [];
  for (let idx = 0; idx < arr.length; idx += 1) {
    if (idx % 2 !== 0) newArr.push(arr[idx]);
  }

  return newArr;
}

let digits = [4, 8, 15, 16, 23, 42];

console.log(oddElementsOf(digits));    // returns [8, 16, 42]