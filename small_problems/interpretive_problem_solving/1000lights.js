/*
### Problem
## Input: Integer
## Output: Array (of lights that are on after n repetitions)

### Rules
# Every round, go through array based on round number

# Lights are 1 indexed

### Data Structure
  - Create the array through a for loop
  - The array will be all boolean values
  
*/

function lightsOn(switches) {
  let switchesArr = [];
  for (let idx = 0; idx < switches; idx += 1) {
    switchesArr.push(true);
  }
  // Case for n = 1 already taken care of, time for round 2

  for (let round = 2; round <= switches; round += 1) {
    for (let idx = round; idx <= switches; idx += round) {
      switchesArr[idx - 1] = !switchesArr[idx - 1];
    }
  }

  let idx = 0;
  switchesArr = switchesArr.map(el => {
    idx += 1;
    if (el) {
      return idx;
    } else {
      return el;
    }
  });
  return switchesArr.filter(el => el);
}

console.log(lightsOn(5));        // [1, 4]
// Detailed result of each round for `5` lights
// Round 1: all lights are on
// Round 2: lights 2 and 4 are now off;     1, 3, and 5 are on
// Round 3: lights 2, 3, and 4 are now off; 1 and 5 are on
// Round 4: lights 2 and 3 are now off;     1, 4, and 5 are on
// Round 5: lights 2, 3, and 5 are now off; 1 and 4 are on

console.log(lightsOn(100));      // [1, 4, 9, 16, 25, 36, 49, 64, 81, 100]