function join(arr, string) {
  let newStr = '';
  for (let idx = 0; idx < arr.length; idx++) {
    newStr += arr[idx]
    if (idx < arr.length - 1) newStr += string
  }

  return newStr;
}

console.log(join(['bri', 'tru', 'wha'], 'ck '));       // 'brick truck wha'
console.log(join([1, 2, 3], ' and '));                 // '1 and 2 and 3'