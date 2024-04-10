function letterPercentages(str) {
  let lowercaseRatio = str.match(/[a-z]/g) ? str.match(/[a-z]/g).length : 0.00;
  lowercaseRatio /= str.length;
  let uppercaseRatio = str.match(/[A-Z]/g) ? str.match(/[A-Z]/g).length : 0.00;
  uppercaseRatio /= str.length;
  let neitherRatio = (1.00 - lowercaseRatio - uppercaseRatio) * 100;

  return {
    lowercase: String(lowercaseRatio),
    uppercase: String(uppercaseRatio),
    neither: String(neitherRatio),
  }
}

console.log(letterPercentages('abCdef 123'));
// { lowercase: "50.00", uppercase: "10.00", neither: "40.00" }

console.log(letterPercentages('AbCd +Ef'));
// { lowercase: "37.50", uppercase: "37.50", neither: "25.00" }

console.log(letterPercentages('123'));
// { lowercase: "0.00", uppercase: "0.00", neither: "100.00" }