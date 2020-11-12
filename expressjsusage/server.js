const { response } = require('express');
const express = require('express');
const app = express();
const port = 8080;

// express middleware
app.use((req, red, next) => {
  console.log('expressvpnusage', 'Will hang at this point, unless third param is called');
  next();
});

// get, post, put, delete methods
app.get('/', (req, res) => {
  res.send('<h1>Awesome website</h1>');
})
app.get('/data', (req, res) => {
  // res.send('<h1>You again?</h1>');
  dataObj = {
    a: "a",
    b: "b",
    1: 1
  }
  res.send(dataObj);
});
app.listen(8080, () => {
  console.log(`Don't call it a callback (listening on port ${port})`);
});