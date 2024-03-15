function foo(bar, qux, baz) {
  return {
    bar,
    baz,
    qux,
  };
}

function foo2(bar2, qux2, baz2) {
  return {
    bar2: bar2,
    qux2: qux2,
    baz2: baz2,
  }
}

console.log(foo('a', 'b', 'c'))
console.log(foo2('a', 'b', 'c'))