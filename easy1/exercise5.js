let rlSync = require('readline-sync');

function sumOrProductOfConsecutiveIntegers() {
  let num = Number(rlSync.question('Please enter an integer greater than 0: '));
  let decision = rlSync.question('Enter "s" to compute the sum, or "p" to compute the product. ');

  let total;
  switch (decision) {
    case 's':
      total = 0;
      while (num >= 1) {
        total += num
        num -= 1
      }

      console.log(`The sum of the integers between 1 and ${num} is ${total}.`);
      break;
    case 'p':
      total = 1;
      while (num > 1) {
        total *= num
        num -= 1
      }

      console.log(`The product of the integers between 1 and ${num} is ${total}.`);
      break;
    default:
      console.log('Invalid input');
  }
}

sumOrProductOfConsecutiveIntegers();