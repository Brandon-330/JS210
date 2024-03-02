function multiplesOfThreeAndFive() {
  for (let i = 3; i <= 100; i++) {
    if (i % 15 == 0) {
      console.log(i + '!');
    } else if (i % 3 == 0 || i % 5 == 0) {
      console.log(String(i));
    }
  }
}


multiplesOfThreeAndFive();