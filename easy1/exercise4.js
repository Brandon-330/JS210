let rlSync = require('readline-sync');

function tipCalculator() {
  let bill = rlSync.question('What is the bill? ');
  let tipPercentage = rlSync.question('What is the tip percentage? ');
  let tip = bill * tipPercentage / 100;
  let total = Number(bill) + tip;

  console.log(`The tip is $${tip.toFixed(2)}`);
  console.log(`The total is $${total.toFixed(2)}`);
}

tipCalculator();