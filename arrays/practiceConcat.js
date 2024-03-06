function concat(arr1, arr2) {
  let newArr = [];
  
  for (let idx = 0; idx < arr1.length; idx++) {
    newArr.push(arr1[idx]);
  }

  for (let idx = 0; idx < arr2.length; idx++) {
    newArr.push(arr2[idx]);
  }

  return newArr;
}

console.log(concat([1, 2, 3], [4, 5, 6]));       // [ 1, 2, 3, 4, 5, 6 ]