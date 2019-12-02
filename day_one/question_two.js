const fs = require('fs');

let modules = fs
  .readFileSync('./input.txt')
  .toString()
  .split('\n');

const getGasRequired = mass => {
  let massRequired = Math.floor(mass / 3) - 2;

  if (massRequired <= 0) {
    massRequired = 0;
    return massRequired;
  }

  return massRequired + getGasRequired(massRequired);
};

const totalGasRequired = modules.reduce((total, mass) => {
  return total + getGasRequired(mass);
}, 0);

console.log(totalGasRequired);
