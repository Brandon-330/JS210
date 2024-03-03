function indexOf(firstString, secondString) {
  for (let idx1 = 0; idx1 + secondString.length <= firstString.length; idx1++) {
    let bool = true;
    let idx2 = 0;
    while (idx2 < secondString.length) {
      if (firstString[idx1 + idx2] != secondString[idx2]) bool = false;
      idx2 += 1;
    }

    if (bool) return idx1
  }

  return -1
}

function lastIndexOf(firstString, secondString) {
  let startIdx;
  let totalIdx = 0;
  while (indexOf(firstString, secondString) != -1) {
    startIdx = indexOf(firstString, secondString);
    totalIdx += startIdx;

    let newStr = '';
    for (let i = 0; i < firstString.length; i++) {
      if (i < startIdx || i >= startIdx + secondString.length) {
        newStr += firstString[i];
      }
    }

    firstString = newStr;
  }

  return startIdx ? totalIdx : -1;
}

console.log(indexOf('Some strings', 's'));                      // 5
console.log(indexOf('Blue Whale', 'Whale'));                    // 5
console.log(indexOf('Blue Whale', 'Blute'));                    // -1
console.log(indexOf('Blue Whale', 'leB'));                      // -1

console.log(lastIndexOf('Some strings', 's'));                  // 11
console.log(lastIndexOf('Blue Whale, Killer Whale', 'Whale'));  // 19
console.log(lastIndexOf('Blue Whale, Killer Whale', 'all'));    // -1