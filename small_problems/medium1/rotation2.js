function rotateRightmostDigits(num, n) {
  let numArr = toArray(num);
  let rightMostIdx = numArr.length - n;
  let splicedArr = numArr.splice(rightMostIdx);
  let rotatedSlice = rotate(splicedArr);
  rotatedSlice.forEach(num => numArr.push(num));

  return Number(numArr.join(''));
}

function rotate(arr) {
  arr.push(arr.shift());
  return arr;
}

function toArray(num) {
  let string = num.toString();
  let result = [];
  for (let idx = 0; idx < string.length; idx += 1) {
    let char = string[idx];
    result.push(Number(char));
  }

  return result;
}

console.log(rotateRightmostDigits(735291, 1));      // 735291
console.log(rotateRightmostDigits(735291, 2));      // 735219
console.log(rotateRightmostDigits(735291, 3));      // 735912
console.log(rotateRightmostDigits(735291, 4));      // 732915
console.log(rotateRightmostDigits(735291, 5));      // 752913
console.log(rotateRightmostDigits(735291, 6));      // 352917