function isPalindrome(str) {
  for (let idx = 0; idx < str.length; idx += 1) {
    let leftToRightChar = str[idx];
    let rightToLeftChar = str[(str.length - 1) - idx];
    if (leftToRightChar !== rightToLeftChar) {
      return false;
    }
  }

  return true;
}

console.log(isPalindrome('madam'));               // true
console.log(isPalindrome('Madam'));               // false (case matters)
console.log(isPalindrome("madam i'm adam"));      // false (all characters matter)
console.log(isPalindrome('356653'));              // true