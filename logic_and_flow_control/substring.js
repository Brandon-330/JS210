function substr(string, start, length) {
  let newStr = '';
  start = (start >= 0 ? start : string.length + start);

  for (let idx = start; idx < start + length; idx++) {
    if (string[idx]) {
      newStr += string[idx];
    } else {
      break;
    };
  }

  return newStr;
}

let string = 'hello world';

console.log(substr(string, 2, 4));      // "llo "
console.log(substr(string, -3, 2));     // "rl"
console.log(substr(string, 8, 20));     // "rld"
console.log(substr(string, 0, -20));    // ""
console.log(substr(string, 0, 0));      // ""