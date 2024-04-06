function swapCase(str) {
  let result = '';
  for (let idx = 0; idx < str.length; idx += 1) {
    let char = str[idx]
    if (char.match(/[a-z]/)) {
      result += char.toUpperCase();
    } else if (char.match(/[A-Z]/)) {
      result += char.toLowerCase();
    } else {
      result += char;
    }
  }

  return console.log(result);
}

swapCase('CamelCase');              // "cAMELcASE"
swapCase('Tonight on XYZ-TV');      // "tONIGHT ON xyz-tv"