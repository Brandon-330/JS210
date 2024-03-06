function unshift(array, num) {
  for (let idx = array.length; idx >= 0; idx--) {
    let previousNum = array[idx - 1];
    if (idx === 0) {
      array[idx] = num;
    } else {
      array[idx] = previousNum;
    }
  }

  return array.length;
}

let count = [1, 2, 3];
console.log(unshift(count, 0));
console.log(count);