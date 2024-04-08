function foo() {
  return {
    bar() {
      console.log("bar");
    },
    qux(arg1) {
      console.log("qux");
      console.log(arg1);
    },
    baz(arg1, arg2) {
      console.log("baz");
      console.log(arg1);
      console.log(arg2);
    },
  };
}

function foo2() {
  return {
    bar: () => {
      console.log("bar");
    },
    qux: (arg1) => {
      console.log("qux");
      console.log(arg1);
    },
    baz: (arg1, arg2) => {
      console.log("baz");
      console.log(arg1);
      console.log(arg2);
    },
  }
}

console.log(foo())
console.log(foo2().qux('ab'))