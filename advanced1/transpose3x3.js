function transpose(matrix) {
  let transposedMatrix = [];
  for (let rowIdx = 0; rowIdx < matrix[0].length; rowIdx += 1) {
    transposedMatrix[rowIdx] = [];
    matrix.forEach(row => transposedMatrix[rowIdx].push(row[rowIdx]));
  }

  return transposedMatrix;
}

console.log(transpose([[1, 2, 3, 4]]));            // [[1], [2], [3], [4]]
console.log(transpose([[1], [2], [3], [4]]));      // [[1, 2, 3, 4]]
console.log(transpose([[1]]));                     // [[1]]

console.log(transpose([[1, 2, 3, 4, 5], [4, 3, 2, 1, 0], [3, 7, 8, 6, 2]]));
// [[1, 4, 3], [2, 3, 7], [3, 2, 8], [4, 1, 6], [5, 0, 2]]