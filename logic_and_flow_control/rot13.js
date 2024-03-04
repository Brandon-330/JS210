function rot13(string) {
  let rotatedString = '';
  for (let idx = 0; idx < string.length; idx++) {
    let char = string[idx];
    if (/[a-zA-Z]/.match(char)) {
      let asciiNumeric = char.charCodeAt(0);
      if (/[a-z]/.match(char) {

      }
      (asciiNumeric = asciiNumeric + 17 < 97 ? asciiNumeric + 17)

    } else {
      rotatedString += string[idx]
    };
  }
}

console.log(rot13('Teachers open the door, but you must enter by yourself.'));

// logs:
//Grnpuref bcra gur qbbe, ohg lbh zhfg ragre ol lbhefrys.

console.log(rot13(rot13('Teachers open the door, but you must enter by yourself.')));

// logs:
//Teachers open the door, but you must enter by yourself.