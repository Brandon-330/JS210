function triangle(...sides) {
  if (sides.some(side => side <= 0)) return 'invalid';
  sides.sort((a, b) => b - a);
  let longestSide = sides[0];
  if (longestSide >= sides[1] + sides[2]) return 'invalid';

  if (isEquilateral(sides)) {
    return 'equilateral';
  } else if (isScalene(sides)) {
    return 'scalene';
  } else {
    return 'isosceles'
  }
}

function isScalene(sides) {
  while (sides.length) {
    let side = sides.shift();
    for (let idx = 0; idx < sides.length; idx += 1) {
      let iterativeSide = sides[idx];
      if (iterativeSide === side) return false;
    }
  }

  return true;
}

function isEquilateral(sides) {
  let side = sides[0];
  return sides.every(iterativeSide => side === iterativeSide);
}

console.log(triangle(3, 3, 3));        // "equilateral"
console.log(triangle(3, 3, 1.5));      // "isosceles"
console.log(triangle(3, 4, 5));        // "scalene"
console.log(triangle(0, 3, 3));        // "invalid"
console.log(triangle(3, 1, 1));        // "invalid"