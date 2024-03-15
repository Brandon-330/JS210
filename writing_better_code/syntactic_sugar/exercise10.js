function strings(...strs) {
  return {
    first: strs[0],
    last: strs[strs.length - 1],
    middle: strs.slice(1, 4).sort(),
  };
}

let aight = strings('a', 'b', 'c', 'd', 'e');
console.log(aight.first);
console.log(aight.last);
console.log(aight.middle);