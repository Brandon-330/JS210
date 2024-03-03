let trim = function(string) {
  let startIdx = 0;
  let char = string[startIdx];
  while (char === ' ') {
    startIdx += 1;
    char = string[startIdx];
  }

  let beforeFirstLastSpaceIdx = string.length - 1;
  char = string[beforeFirstLastSpaceIdx];
  while (char === ' ') {
    beforeFirstLastSpaceIdx -= 1;
    char = string[beforeFirstLastSpaceIdx];
  }

  let newString = '';
  for (let idx = startIdx; idx <= beforeFirstLastSpaceIdx; idx++) {
    let char = string[idx];
    
    newString += char;
  }

  return newString
}

console.log(trim('  abc  ') === 'abc');  // "abc"
console.log(trim('abc   ') === 'abc');   // "abc"
console.log(trim(' ab c') === 'ab c');    // "ab c"
console.log(trim(' a b  c') === 'a b  c');  // "a b  c"
console.log(trim('      ') === '');   // ""
console.log(trim('') === '');         // ""