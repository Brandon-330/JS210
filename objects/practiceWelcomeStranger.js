function greetings(fullName, occupationObj) {
  let name = fullName.join(' ');
  console.log(`Hello, ${name}! Nice to have a ${occupationObj.title} ${occupationObj.occupation} around.`)
}

greetings(['John', 'Q', 'Doe'], { title: 'Master', occupation: 'Plumber' });

// console output
// Hello, John Q Doe! Nice to have a Master Plumber around.