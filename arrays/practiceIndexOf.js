function indexOf(array, num) {
  if (array.length === 0) return undefined;

  let iteratingValue;
  for (let idx = 0; idx < array.length; idx++) {
    iteratingValue = array[idx];
    if (iteratingValue === num) return idx;
  }

  return -1;
}

console.log(indexOf([1, 2, 3, 3], 3));         // 2
console.log(indexOf([1, 2, 3], 4));            // -1