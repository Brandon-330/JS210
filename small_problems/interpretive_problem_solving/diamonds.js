/*
### Problem
## Input: Integer
## Output: Print statement

## Rules
# Explicit:
  - Integer provided is odd
  - Print an nXn grid with a diamond

# Implicit:
  - n is always greater than 0

### Data Structure
  - For loop to determine row number, up to and including n
  - For loop down

### Algorithm
  - For loop, starting from one, increasing by two
  - Stars, n times
  - For loop down, starting from n - 2, decreasing by two
*/

function diamond(n) {
  for (let row = 1; row < n; row += 2) {
    let stars = row;
    let spaces = (n - stars) / 2;
    print(spaces, stars);
  }

  print(0, n);
  
  for (let row = n - 2; row > 0; row -= 2) {
    let stars = row;
    let spaces = (n - stars) / 2;
    print(spaces, stars);
  }
}

function print(spaces, stars) {
  let newStr = '';
  for (let idx = 0; idx < spaces; idx += 1) {
    newStr += ' ';
  } 

  for (let idx = 0; idx < stars; idx += 1) {
    newStr += '*';
  }

  for (let idx = 0; idx < spaces; idx += 1) {
    newStr += ' ';
  }

  console.log(newStr);
}

diamond(1);
diamond(3);
diamond(9);