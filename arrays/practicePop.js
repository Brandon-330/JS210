function pop(array) {
  poppedElement = array[array.length - 1];
  array.length = array.length - 1;
  return poppedElement;
}

let count = [1, 2, 3];
console.log(pop(count));             // 3
console.log(count);                  // [ 1, 2 ]