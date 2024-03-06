function push(array, num) {
  array[array.length] = num;
  return array.length;
}

let count = [0, 1, 2];
push(count, 3);         // 4
console.log(count);                  // [ 0, 1, 2, 3 ]