function startsWith(string, searchString) {
  for (let idx = 0; idx < searchString.length; idx++) {
    let char = string[idx];

    if (char != searchString[idx]) return false;
  }

  return true;
}

let str = 'We put comprehension and mastery above all else';
console.log(startsWith(str, 'We'));              // true
console.log(startsWith(str, 'We put'));          // true
console.log(startsWith(str, ''));                // true
console.log(startsWith(str, 'put'));             // false

let longerString = 'We put comprehension and mastery above all else!';
console.log(startsWith(str, longerString));      // false