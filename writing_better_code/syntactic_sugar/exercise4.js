function foo([ one, , three ]) {
  return [
    three,
    5,
    one,
  ];
}

let array = [1, 2, 3];
let result = foo(array);
let [ bar, qux, baz ] = result;
let bar = result[0];
let 