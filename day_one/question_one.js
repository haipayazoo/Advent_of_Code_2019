const fs = require('fs');

let modules = fs
  .readFileSync('./input.txt')
  .toString()
  .split('\n');

const totalGasRequired = modules.reduce((total, mass) => {
  return total + (Math.floor(mass / 3) - 2);
}, 0);

console.log(totalGasRequired);
