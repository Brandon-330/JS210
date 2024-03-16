function concat(...args) {
  let newArr = [];
  for (let argNumber = 0; argNumber < args.length; argNumber += 1) {
    let element = args[argNumber];
    if (Array.isArray(element)) {
      for (let idx = 0; idx < element.length; idx += 1) {
        newArr.push(element[idx]);
      }
    } else {
      newArr.push(element);
    } 
  }

  return newArr;
}

console.log(concat([1, 2, 3], [4, 5, 6], [7, 8, 9]));    // [1, 2, 3, 4, 5, 6, 7, 8, 9]
console.log(concat([1, 2], 'a', ['one', 'two']));        // [1, 2, "a", "one", "two"]
console.log(concat([1, 2], ['three'], 4));               // [1, 2, "three", 4]