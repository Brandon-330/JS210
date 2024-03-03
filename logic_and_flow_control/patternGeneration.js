function generatePattern(num) {
  let numArr = [];
  for (let i = 1; i <= num; i++) {
    numArr.push(i);
    let line = numArr.join('');
    for (let j = i; j < num; j++) {
      line += '*';
    }
    console.log(line)
  }
}

generatePattern(7);