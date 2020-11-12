const fs = require('fs');

const input = fs.readFileSync('./input.txt', 'utf-8');

let floorUp = 0;
let floorDown = 0;
let firstTimeBasement = undefined;

for(let i = 0; i < input.length; i++) {
  if (input[i] === '(') {floorUp++;}
  if (input[i] === ')') {floorDown--;}
  if ((floorDown + floorUp) === -1) {
    if (firstTimeBasement === undefined) {
      firstTimeBasement = i + 1;
    }
  }
}

console.log(floorUp + floorDown);
console.log(firstTimeBasement);