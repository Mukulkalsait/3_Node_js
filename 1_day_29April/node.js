/* Practice:
---------------------------------------------------------------
var http = require('http');

http
  .createServer(function (req, res) {
    res.writeHead(200, { 'Content-Type': 'text/html' }); // Y:gives Header
    res.end('Hello World!'); // Y: closes the connection.
  })
  .listen(8080); //Y: listen client request on port 8080.

DX: make sure to use http:// and not https://
---------------------------------------------------------------
*/
var http = require('http'); //Y: 1

http
  .createServer(function (req, res) {
    //Y: 2
    res.writeHead(200, { 'Content-Type': 'text/html' });
    res.end('Hello There Again !');
  })
  .listen(8080);

/* Y:
 * 1. we require http
 * 2. we create server Application with http consisting of 1 function.
 * 3. when 'req' is recieved function is returingng 'res'.
 * 4. .listen(8080); will host on http://localhost:8080
 *
 *
 * */
