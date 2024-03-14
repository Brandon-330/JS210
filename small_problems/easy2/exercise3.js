function stringy(num) {
  let newStr = '';
  for (let counter = 0; counter < num; counter += 1) {
    if (counter % 2 !== 0) {
      newStr += '0';
    } else {
      newStr += '1';
    }
  }

  return newStr;
}

console.log(stringy(6));    // "101010"
console.log(stringy(9));    // "101010101"
console.log(stringy(4));    // "1010"
console.log(stringy(7));    // "1010101"