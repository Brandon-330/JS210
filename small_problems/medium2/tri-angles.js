function triangle(...angles) {
  if (sumIs180(angles) && angles.every(angle => angle > 0)) {
    if (angles.some(angle => angle > 90)) {
      return 'obtuse';
    } else if (angles.some(angle => angle === 90)) {
      return 'right';
    } else {
      return 'acute';
    }
  } else {
    return 'invalid';
  }
}

function sumIs180(angles) {
  return angles.reduce((sum, angle) => sum + angle, 0) === 180;
}

console.log(triangle(60, 70, 50));       // "acute"
console.log(triangle(30, 90, 60));       // "right"
console.log(triangle(120, 50, 10));      // "obtuse"
console.log(triangle(0, 90, 90));        // "invalid"
console.log(triangle(50, 50, 50));       // "invalid"