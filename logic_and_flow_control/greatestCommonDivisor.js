function gcd(num1, num2) {
  let minNum = (num1 >= num2) ? num2 : num1;
  
  let commonDivisor;
  for (let i =  1; i <= minNum; i++) {
    if (num1 % i === 0 && num2 % i === 0) commonDivisor = i;
  }

  return commonDivisor;
}

console.log(gcd(12, 4));   // 4
console.log(gcd(15, 10));  // 5
console.log(gcd(9, 2));    // 1