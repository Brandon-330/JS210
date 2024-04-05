function isUppercase(string) {
  let strArr = [];
  for (let idx = 0; idx < string.length; idx += 1) {
    let char = string[idx];
    strArr.push(char);
  }

  return strArr.every(char => char === char.toUpperCase());
}

console.log(isUppercase('t'));               // false
console.log(isUppercase('T'));               // true
console.log(isUppercase('Four Score'));      // false
console.log(isUppercase('FOUR SCORE'));      // true
console.log(isUppercase('4SCORE!'));         // true
console.log(isUppercase(''));                // true