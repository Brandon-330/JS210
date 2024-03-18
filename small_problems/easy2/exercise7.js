function twice(num) {
  let stringNum = String(num);
  let halfwayPoint = numLength / 2;

  let newStr = stringNum.slice(0, halfwayPoint)

  return (newStr === stringNum.slice(halfwayPoint)) ? num : num * 2;
}

console.log(twice(37) === 74);          // 74
console.log(twice(44) === 44);          // 44
console.log(twice(334433) === 668866);      // 668866
console.log(twice(444) === 888);         // 888
console.log(twice(107) === 214);         // 214
console.log(twice(103103) === 103103);      // 103103
console.log(twice(3333) === 3333);        // 3333
console.log(twice(7676) === 7676);        // 7676