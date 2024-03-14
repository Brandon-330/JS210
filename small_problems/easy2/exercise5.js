function triangle(num) {
  for (let space = num - 1; space >= 0; space -= 1 ) {
    let newStr = '';
    for (let counter = 0; counter < space; counter += 1) {
      newStr += ' ';
    }
    for (let counter = num; counter > space; counter -= 1) {
      newStr += '*';
    }

    console.log(newStr);
  }
}

triangle(5);
/*
    *
   **
  ***
 ****
*****
*/
triangle(9);
/*
        *
       **
      ***
     ****
    *****
   ******
  *******
 ********
*********
*/