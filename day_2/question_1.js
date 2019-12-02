const fs = require('fs');

let intcode = fs.readFileSync('./input.txt').toString().split(',').map(Number);

const parseIntcode = (intcode) => {
    for (let i = 0; i < intcode.length; i += 4) {
        switch (intcode[i]) {
            case 1:
                intcode[intcode[i + 3]] = intcode[intcode[i + 1]] + intcode[intcode[i + 2]];
                break;
            case 2:
                intcode[intcode[i + 3]] = intcode[intcode[i + 1]] * intcode[intcode[i + 2]];
                break;
            case 99:
                return;
            default:
                break;
        }
    }

}

console.log('The output at position zero is: ', intcode[0]);

for (let noun = 0; noun < 100; noun++) {
    for (let verb = 0; verb < 100; verb++) {
        let intcodeRef = Array.from(intcode)

        intcodeRef[1] = noun;
        intcodeRef[2] = verb;

        parseIntcode(intcodeRef);

        if (intcodeRef[0] === 19690720) {
            console.log(`Found a match with noun: ${noun} and verb: ${verb}`);
            console.log(`Therefore, the answer is ${100 * noun + verb}`);
        }

    }
}
parseIntcode(intcode);