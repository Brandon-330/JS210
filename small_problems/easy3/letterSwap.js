function swap(str) {
  return str.split(/\s/).map(word => {
    if (word.length === 1) {
      return word;
    } else {
      return word[word.length - 1] + word.slice(1, word.length - 1) + word[0]
    }
  }).join(' ');
}

console.log(swap('Oh what a wonderful day it is'));  // "hO thaw a londerfuw yad ti si"
console.log(swap('Abcde'));                          // "ebcdA"
console.log(swap('a'));                              // "a"