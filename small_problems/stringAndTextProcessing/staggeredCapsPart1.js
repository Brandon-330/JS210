function staggeredCase(string) {
  let newStr = '';
  for (let idx = 0; idx < string.length; idx += 1) {
    let char = string[idx];
    if (idx % 2 == 0) {
      newStr += char.toUpperCase();
    } else {
      newStr += char.toLowerCase();
    }
  }

  return newStr;
}

console.log(staggeredCase('I Love Launch School!'));        // "I LoVe lAuNcH ScHoOl!"
console.log(staggeredCase('ALL_CAPS'));                     // "AlL_CaPs"
console.log(staggeredCase('ignore 77 the 4444 numbers'));   // "IgNoRe 77 ThE 4444 nUmBeRs"