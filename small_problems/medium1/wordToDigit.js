const WORD_TO_NUM = {
  one: '1',
  two: '2',
  three: '3',
  four: '4',
  five: '5',
  six: '6',
  seven: '7',
  eight: '8',
  nine: '9',
};

function wordToDigit(str) {
  Object.keys(WORD_TO_NUM).forEach(numWord => {
    str = str.replaceAll(numWord, WORD_TO_NUM[numWord]);
  });

  return str;
}

console.log(wordToDigit('Please call me at five five five one two three four. Thanks.'));
// "Please call me at 5 5 5 1 2 3 4. Thanks."