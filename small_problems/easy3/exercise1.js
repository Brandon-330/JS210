function concatenate(string1, string2) {
  if (string2) {
    return string1 + string2;
  } else {
    return 'foo' + string1;
  }
}

console.log(concatenate('aaa'));
console.log