var qux = 2;
function foo() {
  var qux = 1;
  bar();
}

function bar() {
  console.log(qux);
}

foo();  // logs 1