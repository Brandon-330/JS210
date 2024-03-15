function foo(one, two, three) {
  return {
    bar: one,
    baz: two,
    qux: three,
  };
}

let { baz, qux, bar } = foo(1, 2, 3);
let obj = foo(1, 2, 3);
let bar2 = obj.bar;
let baz2 = obj.baz;
let qux2 = obj.qux;