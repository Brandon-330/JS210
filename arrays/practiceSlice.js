function slice(array, startIdx, endIdx) {
  if (array.length === 0) return undefined;
  
  let newArr = [];
  let val;
  for (let idx = 0; idx < array.length; idx++) {
    val = array[idx];
    if (idx >= startIdx && idx < endIdx) newArr.push(val);
  }

  return newArr;
}

console.log(slice([1, 2, 3, 4, 5], 0, 2));                      // [ 1, 2 ]
console.log(slice(['a', 'b', 'c', 'd', 'e', 'f', 'g'], 1, 3));  // [ 'b', 'c' ]