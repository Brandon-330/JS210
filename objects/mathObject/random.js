function randomizer(a, b) {
  if (a > b)return undefined
  return Math.random() * (b - a) + a
}

console.log(randomizer(1000, 5000))