function cleanUp(string) {
  let newStr = '';
  let isLastCharLetterAlphaNumeric = true;
  for (let idx = 0; idx < string.length; idx += 1) {
    let char = string[idx];
    if (char.match(/[a-zA-Z]/)) {
      newStr += char;
      isLastCharLetterAlphaNumeric = true;
    } else if (isLastCharLetterAlphaNumeric) {
      newStr += ' '
      isLastCharLetterAlphaNumeric = false;
    };
  }

  return newStr;
}

console.log(cleanUp("---what's my +*& line?"));    // " what s my line "