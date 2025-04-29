var http = require('http');

http
  .createServer(function (req, res) {
    res.writeHead(200, { 'Content-Type': 'text/html' }); // Y:gives Header
    res.end('Hello World!'); // Y: closes the connection.
  })
  .listen(8080); //Y: listen client request on port 8080.

//DX: make sure to use http:// and not https://
