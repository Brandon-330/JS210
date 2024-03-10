function repeatedCharacters(string) {
  string = string.toLowerCase()
  let newObj = {};
  for (let idx = 0; idx < string.length; idx += 1) {
    let char = string[idx];
    let freq = frequencyOfCharInString(char, string);
    if (freq > 1 && !newObj[char]) {
      newObj[char] = freq;
    };
  }

  return newObj;
}

function frequencyOfCharInString(char, string) {
  let counter = 0;
  for (let idx = 0; idx < string.length; idx += 1) {
    if (char === string[idx]) counter += 1;
  }

  return counter;
}

console.log(repeatedCharacters('Programming'));    // { r: 2, g: 2, m: 2 }
console.log(repeatedCharacters('Combination'));    // { o: 2, i: 2, n: 2 }
console.log(repeatedCharacters('Pet'));            // {}
console.log(repeatedCharacters('Paper'));          // { p: 2 }
console.log(repeatedCharacters('Baseless'));       // { s: 3, e: 2 }