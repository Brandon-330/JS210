/*
### Problem
## Input: Number
## Output: Array

## Rules
# Explicit:
  - Bank of switches, 1 through n
  - Every round, you switch the lights on/off based on round number
  - Ultimately, return the array of numbers that are on after n repetitions

# Implicit:
  - Is n ever 0 or less than 0?
  - Is n inclusive?

### Data Structure
# Create a for loop and fill an empty array, all with switches and a boolean value
# Create a for loop to determine round number, this round number must be less than or equal to n, increasing by round number

### Algortihm
# Create a for loop and populate an empty array with a nested array
  - Nested array to include switch# and on/off status
# Create an outer for loop to determine round number
# Create an index for loop that is less than or equal to n, incrementing by round number
  - Mutate the array by switching on/off switch 
# Ultimately use filter function to only pick the inner arrays that are on
  - Use map to only receive back the first number of inner array
*/

function lightsOn(switches) {
  let switchBank = [];
  for (let counter = 1; counter <= switches; counter += 1) {
    switchBank.push([counter, false]);
  }

  for (let round = 1; round <= switches; round += 1) {
    for (let idx = round - 1; idx < switchBank.length; idx += round) {
      switchBank[idx][1] = !switchBank[idx][1];
    }
  }

  return switchBank.filter(innerArray => innerArray[1]).map(innerArray => innerArray[0]);
}

console.log(lightsOn(5));        // [1, 4]
// Detailed result of each round for `5` lights
// Round 1: all lights are on
// Round 2: lights 2 and 4 are now off;     1, 3, and 5 are on
// Round 3: lights 2, 3, and 4 are now off; 1 and 5 are on
// Round 4: lights 2 and 3 are now off;     1, 4, and 5 are on
// Round 5: lights 2, 3, and 5 are now off; 1 and 4 are on

console.log(lightsOn(100));      // [1, 4, 9, 16, 25, 36, 49, 64, 81, 100]