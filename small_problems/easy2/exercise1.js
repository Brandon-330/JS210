function crunch(str) {
  let newStr = '';
  for (let idx = 0; idx < str.length; idx += 1) {
    let char = str[idx];
    if (newStr[newStr.length - 1] !== char) newStr += str[idx];
  }

  return newStr;
}

console.log(crunch('ddaaiillyy ddoouubbllee'));    // "daily double"
console.log(crunch('4444abcabccba'));              // "4abcabcba"
console.log(crunch('ggggggggggggggg'));            // "g"
console.log(crunch('a'));                          // "a"
console.log(crunch(''));                           // ""