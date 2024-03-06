function shift(array) {
  if (array.length === 0) return undefined;

  let shiftedElement = array[0];
  for (let idx = 0; idx < array.length - 1; idx++) {
    array[idx] = array[idx + 1];
  }
  array.length = array.length - 1;

  return shiftedElement;
}

let count = [1, 2, 3];
console.log(shift(count));
console.log(count);