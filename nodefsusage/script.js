const fs = require('fs');

fs.readFile('./hello.txt', (err, data) => {
  if(err) {
    console.log('error', err);
  }
  console.log('1', data.toString('utf8'));
});

const file = fs.readFileSync('./hello.txt');
console.log('2', file.toString());

// Console wil output 2, before 1

// fs append
// fs.appendFile('./hello.txt', ' Appended text!', err => {
//   console.log(err);
// });

// fs write
// fs.writeFile('bye.txt', 'Sad to see you go', err => {
//   console.log('write', err);
// });

// delete
fs.unlink('./bye.txt', err => {
  if (err) {
    console.log(err);
  }
  console.log('Inception');
});