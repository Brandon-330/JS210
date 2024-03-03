let trim = function(string) {
  let newString = ''
  for (let idx = 0; idx < string.length; idx++) {
    let char = string[idx];

    if (!/\s/.match(char)) {
      newString += char;
    } 
  }

  return newString
}

console.log(trim('  abc  '));  // "abc"
console.log(trim('abc   '));   // "abc"
console.log(trim(' ab c'));    // "ab c"
console.log(trim(' a b  c'));  // "a b  c"
console.log(trim('      '));   // ""
console.log(trim(''));         // ""