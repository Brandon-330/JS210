function stringToInteger(str) {
  let strToNum = {
    '0': 0,
    '1': 1,
    '2': 2,
    '3': 3,
    '4': 4,
    '5': 5,
    '6': 6,
    '7': 7,
    '8': 8,
    '9': 9,
  };

  let result = [];
  
  for (let idx = 0; idx < str.length; idx += 1) {
    let numChar = str[idx];
    result.push(strToNum[numChar]);
  }

  return result.join('');
}

console.log(stringToInteger('4321'));      // 4321
console.log(stringToInteger('570'));       // 570