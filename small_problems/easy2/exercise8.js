function getGrade(...grades) {
  let totalGrades = grades.reduce((sum, grade) => sum + grade );
  return letterGrade(totalGrades / grades.length);
}

function letterGrade(grade) {
  let letter = ''
  if (grade < 60) {
    letter = 'F';
  } else if (grade < 70) {
    letter = 'D';
  } else if (grade < 80) {
    letter = 'C';
  } else if (grade < 90) {
    letter = 'B';
  } else {
    letter = 'A';
  }

  return letter;
}

console.log(getGrade(95, 90, 93));    // "A"
console.log(getGrade(50, 50, 95));    // "D"