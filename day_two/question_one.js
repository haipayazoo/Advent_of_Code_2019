const fs = require('fs');

let intcode = fs
  .readFileSync('./input.txt')
  .toString()
  .split(',')
  .map(Number);

const parseIntcode = intcode => {
  for (let i = 0; i < intcode.length; i += 4) {
    switch (intcode[i]) {
      case 1:
        intcode[intcode[i + 3]] =
          intcode[intcode[i + 1]] + intcode[intcode[i + 2]];
        break;
      case 2:
        intcode[intcode[i + 3]] =
          intcode[intcode[i + 1]] * intcode[intcode[i + 2]];
        break;
      case 99:
        return;
      default:
        break;
    }
  }
};

parseIntcode(intcode);
console.log('The output at position zero is: ', intcode[0]);
