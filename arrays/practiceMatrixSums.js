function matrixSums(arr) {
  let newArr = [];
  arr.forEach ( function(subArr) {
    let total = subArr.reduce( (sum, el) => sum + el);
    newArr.push(total);
  });

  return newArr;
}

console.log(matrixSums([[2, 8, 5], [12, 48, 0], [12]]));  // returns [15, 60, 12]