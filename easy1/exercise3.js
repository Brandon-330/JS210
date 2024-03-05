const METERS_TO_FEET = 3.28084;
const rlSync = require('readline-sync'); 

function areaOf() {
  x = rlSync.question('Enter the length of the room in meters:\n');
  y = rlSync.question('Enter the width of the room in meters:\n');
  area = x * y;
  console.log(`The area of the room is ${area} square meters (${((area * METERS_TO_FEET**2).toFixed(2))} square feet).`);
}

areaOf();