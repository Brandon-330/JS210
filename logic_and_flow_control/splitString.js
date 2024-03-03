function splitString(string, delimiter) {
  if (delimiter === undefined) return console.log('ERROR: no delimiter');

  let newStr = '';
  for (let idx = 0; idx < string.length; idx++) {
    let char = string[idx];
    if (char === delimiter) {
      console.log(newStr);
      newStr = '';
    } else if (delimiter === '') {
      console.log(char);
    }
    else {
      newStr += char;
    }
  }

  if (newStr) console.log(newStr);
}

splitString('abc,123,hello world', ',');
// logs:
// abc
// 123
// hello world

splitString('hello');
// logs:
// ERROR: No delimiter

splitString('hello', '');
// logs:
// h
// e
// l
// l
// o

splitString('hello', ';');
// logs:
// hello

splitString(';hello;', ';');
// logs:
//  (this is a blank line)
// hello