function toLowerCase(string) {
  let newStr = '';
  for (let idx = 0; idx < string.length; idx++) {
    let asciiNumeric = string[idx].charCodeAt(0);
    if (asciiNumeric >= 65 && asciiNumeric < 97) asciiNumeric += 32;
    newStr += String.fromCharCode(asciiNumeric);
  }

  return newStr;
}

console.log(toLowerCase('ALPHABET'));    // "alphabet"
console.log(toLowerCase('123'));         // "123"
console.log(toLowerCase('abcDEF'));      // "abcdef"