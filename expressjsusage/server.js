const express = require('express');
const path = require('path');
const app = express();
const port = 8080;

// app.use(express.urlencoded({extended:false}))
// app.use(express.json());

// app.get('/', (req, res) => {
  // http://localhost:8080/?name=god&age=universe
  // console.log('nodemonusage',req.query);
  // nodemonusage { name: 'god', age: 'universe' }
  // See postman section for usage
  // console.log('nodemonusage', req.body);
  // Will set header key: value if get with params is used (postman)
  // console.log('nodemonusage', req.headers);
  // app.get('/:id'
  // http://localhost:8080/1234?name=god&age=universe
  // console.log('nodemonusage', req.params);
  // nodemonusage { id: '1234' }
//   res.send('Is it me you\'re looking for?');
// })
// app.get('/:id', (req, res) => {
//   res.status(404).send('The gods have forbidden it!');
// })

app.use('/', express.static(path.join(__dirname, 'public')))

app.listen(8080, () => {
  console.log(`Don't call it a callback (listening on port ${port})`);
});

// express middleware
// app.use((req, red, next) => {
//   console.log('expressvpnusage', 'Will hang at this point, unless third param is called');
//   next();
// });

// get, post, put, delete methods
// app.get('/data', (req, res) => {
//   // res.send('<h1>You again?</h1>');
//   dataObj = {
//     a: "a",
//     b: "b",
//     1: 1
//   }
//   res.send(dataObj);
// });

// const user = {
//   user: 'donjr',
//   hobby: 'hunting'
// }

// // Test with getpostman.com
// app.get('/profile', (req,res) => {
//   res.send("getting profile");
// });
// app.post('/profile', (req, res) => {
//   console.log(req.body);
//   res.send('Ya did it son!');
// });