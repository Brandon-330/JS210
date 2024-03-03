function checkGoldbach(expectedSum) {
  if (expectedSum < 4 || expectedSum % 2 != 0) return null;

  let primesArr = [];
  for (let i = 0; i <= expectedSum; i++) {
    if (isPrime(i)) {
      primesArr.push(i);
    }
  }

  for (let idx1 = 0; idx1 < primesArr.length; idx1++) {
    for (let idx2 = primesArr.length - 1; idx2 >= idx1; idx2--) {
      num1 = primesArr[idx1];
      num2 = primesArr[idx2];
      if (num1 + num2 > expectedSum) {
        continue;
      } else if (num1 + num2 === expectedSum) {
        console.log([num1, num2])
      }
    }
  }
}

function isPrime(n) {
  if (n <= 1) return false;
  
  for (let i = 2; i < n; i++) {
    if (i == n) {
      continue;
    } else if (n % i == 0) {
      return false;
    }
  }

  return true;
}

checkGoldbach(3);
// logs: null

checkGoldbach(4);
// logs: 2 2

checkGoldbach(12);
// logs: 5 7

checkGoldbach(100);
// logs:
// 3 97
// 11 89
// 17 83
// 29 71
// 41 59
// 47 53