function featured(n) {
  do {
    if (n > 98765432101) {
      return 'There is no possible number that fulfills those requirements';
    }

    n += 1;
  } while ((n % 7 !== 0));

  while (isAppearsMoreThanOnce(n) || n % 2 === 0) {
    if (n % 2 === 0) {
      n += 7;
    } else {
      n += 14;
    }

    if (n > 9876543201) {
      return 'There is no possible number that fulfills those requirements';
    }
  }

  return n;
}

function isAppearsMoreThanOnce(n) {
  let nums = String(n).split('');
  return nums.some(num => {
    let counter = 1;
    for (let idx = 0; idx < nums.length; idx += 1) {
      let iteratingNum = nums[idx];
      if (num === iteratingNum) {
        counter -= 1;
      }
    }
    
    return counter < 0;
  });
}

console.log(featured(12));           // 21
console.log(featured(20));           // 21
console.log(featured(21));           // 35
console.log(featured(997));          // 1029
console.log(featured(1029));         // 1043
console.log(featured(999999));       // 1023547
console.log(featured(999999987));    // 1023456987
console.log(featured(9876543186));   // 9876543201
console.log(featured(9876543200));   // 9876543201
console.log(featured(9876543201));   // "There is no possible number that fulfills those requirements."