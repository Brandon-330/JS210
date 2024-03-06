function splice(array, startIdx, spliceLength) {
  let returnArray = [];
  
  let val;
  for (let idx = 0; idx < array.length; idx++) {
    if (idx >= startIdx) {
      val = array[0];
      returnArray.push(val);
    } else if (idx + spliceLength < startIdx + spliceLength) {
      val = array[array.length - 1]
      returnArray.push(val);
    }
  }

  return returnArray;
}

let count = [1, 2, 3, 4, 5, 6, 7, 8];
console.log(splice(count, 2, 5));                   // [ 3, 4, 5, 6, 7 ]
console.log(count);                                 // [ 1, 2, 8 ]