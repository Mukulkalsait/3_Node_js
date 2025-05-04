var express = require('express');
// Y: 1. 'require' is used to import the Express module.`pnpm add express` Express provides tools for building web servers and APIs.

var appWebServer = express();
// Y: 2. Create an instance of the Express application. `appWebServer` now represents our server instance.

appWebServer.set('view engine', 'jade');
// Y: 3. Set 'jade' as the view engine. Jade (now called 'pug') is used to render HTML templates dynamically. You should also install it using: `pnpm add jade` or `pnpm add pug` (and rename it if needed).

appWebServer.get('/', function (req, res) {
  res.send('Hello from Express!');
});
// Y: 4. Register a GET route for path '/'.
// When a user visits localhost:3000/, this function runs.
// `req` = incoming request, `res` = outgoing response.
// Currently, the handler is empty—nothing will be shown.

var server = appWebServer.listen(3000, function () {
  console.log('Server is running on http://localhost:3000/');
});
// Y: 5. Start the server and make it listen on port 3000.
// The second function (callback) runs once the server is ready.

/* NOTE:  now once 1 and 2 are Done.
 *  module can be INVOKED.
 *-------------------------------
 *     USE OF EXPRESS:
 *-------------------------------
 * TEMPLATING ENGINE is an approach for injecting values in an application
 *  by picking up data from data files.
 * This concept is pretty famous in Angular JS
 * wherein the curly braces
 *        {{ key }}
 * is used to substitutes values in the web page.
 * The word 'key' in the curly braces basically denotes
 * the variable which will be substituted by a value when the page is displayed.
 *  */

// DX:
// practice
// var express = require('express');
// var appWebServer = express();
// appWebServer.set('view engin', 'jade');
// appWebServer.get('/', function (req, res) {
//   res.send('hello from express?');
// });
// var server = appWebServer.listen(300, function () {
//   console.log('server is running on localhost:3000/');
// });
