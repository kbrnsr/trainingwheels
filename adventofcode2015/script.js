const fs = require('fs');

const input = fs.readFileSync('./input.txt', 'utf-8');

let floorUp = 0;
let floorDown = 0;

for(let i = 0; i < input.length; i++) {
  if (input[i] === '(') {floorUp++;}
  if (input[i] === ')') {floorDown--;}
}

console.log(floorUp + floorDown);