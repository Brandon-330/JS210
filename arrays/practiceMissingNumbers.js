function missing(array) {
  let newArr = [];
  for (let num = array[0]; num < array[array.length - 1]; num++) {
    if (!array.includes(num)) newArr.push(num);
  }

  return newArr;
}

console.log(missing([-3, -2, 1, 5]));                  // [-1, 0, 2, 3, 4]
console.log(missing([1, 2, 3, 4]));                    // []
console.log(missing([1, 5]));                          // [2, 3, 4]
console.log(missing([6]));                             // []