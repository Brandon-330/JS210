function letterCaseCount(string) {
  let obj = {
    lowercase: 0,
    uppercase: 0,
    neither: 0,
  };

  for (let idx = 0; idx < string.length; idx += 1) {
    let char = string[idx];
    if (char.match(/[a-z]/i) && char === char.toUpperCase()) {
      obj.uppercase += 1;
    } else if (char.match(/[a-z]/i) && char === char.toLowerCase()) {
      obj.lowercase += 1;
    } else {
      obj.neither += 1;
    }
  }

  return obj;
}

console.log(letterCaseCount('abCdef 123'));  // { lowercase: 5, uppercase: 1, neither: 4 }
console.log(letterCaseCount('AbCd +Ef'));    // { lowercase: 3, uppercase: 3, neither: 2 }
console.log(letterCaseCount('123'));         // { lowercase: 0, uppercase: 0, neither: 3 }
console.log(letterCaseCount(''));            // { lowercase: 0, uppercase: 0, neither: 0 }