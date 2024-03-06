function lastIndexOf(array, num) {
  let returnIdx = -1;
  for (let idx = 0; idx < array.length; idx++) {
    if (array[idx] === num) returnIdx = idx; 
  }

  return returnIdx;
}

console.log(lastIndexOf([1, 2, 3, 3], 3));     // 3
console.log(lastIndexOf([1, 2, 3], 4));        // -1