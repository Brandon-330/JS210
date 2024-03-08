function wordCount(properties) {
  let newObj = {};
  properties = properties.split(' ');
  for (let idx = 0; idx < properties.length; idx++) {
    let property = properties[idx];
    if (newObj[property]) {
      newObj[property] += 1;
    } else {
      newObj[property] = 1;
    }
  }

  return newObj;
}

console.log(wordCount('box car cat bag box'));  // { box: 2, car: 1, cat: 1, bag: 1 }