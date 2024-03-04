const ASCII_LOWERCASE_A_ORD = 97;
const ASCII_UPPERCASE_A_ORD = 65;

function rot13(string) {
  let rotatedString = '';
  for (let idx = 0; idx < string.length; idx++) {
    let char = string[idx];

    let asciiNumeric;
    if (char.match(/[a-z]/)) {
      asciiNumeric = char.charCodeAt(0);
      // From char ASCII order beyond 'a', add 13 but rotate it back to 0 if >= 26 letters
      asciiNumeric = (ASCII_LOWERCASE_A_ORD + (((asciiNumeric - ASCII_LOWERCASE_A_ORD) + 13) % 26));
    } else if (char.match(/[A-Z]/)) {
      asciiNumeric = char.charCodeAt(0);
      // From char ASCII order beyond 'A', add 13 but rotate it back to 0 if >= 26 letters
      asciiNumeric = (ASCII_UPPERCASE_A_ORD + (((asciiNumeric - ASCII_UPPERCASE_A_ORD) + 13) % 26));
    }

    // Ternary operation depending on if asciiNumber was assigned a value
    rotatedString += (asciiNumeric ? String.fromCharCode(asciiNumeric) : string[idx]);
  }

  return rotatedString;
}

console.log(rot13('Teachers open the door, but you must enter by yourself.'));

// logs:
//Grnpuref bcra gur qbbe, ohg lbh zhfg ragre ol lbhefrys.

console.log(rot13(rot13('Teachers open the door, but you must enter by yourself.')));

// logs:
//Teachers open the door, but you must enter by yourself.