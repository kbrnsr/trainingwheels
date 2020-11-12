const http = require('http');

const server = http.createServer((request, response) => {
  // console.log('nodemonusage req-headers',request.headers)
  console.log('nodemonusage req-method',request.method)
  console.log('nodemonusage req-url',request.url)
  // response.setHeader('Content-Type', 'text/html');
  // response.end('<h1>Sup fool</h1>');
  const user = {
    a: "a",
    b: "b"
  }
  response.setHeader('Content-Type', 'application/json');
  response.end(JSON.stringify(user));

});
server.listen(8080);
console.log('nodemonusage', server.address());