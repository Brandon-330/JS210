function fizzbuzz() {
  for (let i = 0; i <= 100; i++) {
    let output = i;
    
    if (i % 15 == 0) {
      output = 'FizzBuzz';
    } else if (i % 5 == 0) {
      output = 'Buzz';
    } else if (i % 3 == 0) {
      output = 'Fizz';
    }

    console.log(output);
  }
}

fizzbuzz();