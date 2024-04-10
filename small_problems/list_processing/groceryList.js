function buyFruit(array) {
  let newArr = [];
  array.forEach(wordAndNum => {
    let [word, num] = wordAndNum;
    for (let idx = 0; idx < num; idx += 1) {
      newArr.push(word);
    }
  });

  return newArr;
}

console.log(buyFruit([['apple', 3], ['orange', 1], ['banana', 2]]));
// returns ["apple", "apple", "apple", "orange", "banana", "banana"]