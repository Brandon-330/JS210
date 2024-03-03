function averageScores() {
  let scores = [];
  let counter = 0;

  return function(score) {
    counter += 1;
    scores.push(score);

    if (counter > 2) {
      let avgGrade = scores.reduce((total, num) => total + num, 0) / 3;

      let grade = ''
      if (avgGrade >= 90) {
        grade = 'A';
      } else if (avgGrade >= 70) {
        grade = 'B';
      } else if (avgGrade >= 50) {
        grade = 'C';
      } else {
        grade = 'F';
      }

      return console.log(`'Based on the average of your 3 scores your letter grade is "${grade}"'`)
    }
  };
}

let examScores = averageScores();
examScores(90);
examScores(50);
examScores(78);