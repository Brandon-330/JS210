function isRealPalindrome(str) {
  let newStr = str.split('').filter(char => char.match(/[a-z]/i)).map(char => char.toLowerCase());
  return newStr.join('') === newStr.reverse().join('');
}

console.log(isRealPalindrome('madam'));               // true
console.log(isRealPalindrome('Madam'));               // true (case does not matter)
console.log(isRealPalindrome("Madam, I'm Adam"));     // true (only alphanumerics matter)
console.log(isRealPalindrome('356653'));              // true
console.log(isRealPalindrome('356a653'));             // true
console.log(isRealPalindrome('123ab321'));            // false