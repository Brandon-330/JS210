function reverse(array) {
  let reversedArray = [];
  let arrLength = array.length;
  for (let item = 0; item < arrLength; item += 1) {
    reversedArray.push(array.pop());
  }

  return reversedArray;
}

console.log(reverse([1, 2, 3, 4]));