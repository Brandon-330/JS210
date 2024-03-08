function copyProperties(fromObj, toObj) {
  let counter = 0;
  for (let property in fromObj) {
    counter += 1;
    toObj[property] = fromObj[property];
  }

  return counter;
}

let hal = {
  model: 9000,
  enabled: true,
};

let sal = {};
console.log(copyProperties(hal, sal));  // 2
console.log(sal);                       // { model: 9000, enabled: true }