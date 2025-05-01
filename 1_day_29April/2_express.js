var express = require('express'); //     Y: 1. require calling.
var app = express(); //            Y: 2. OBJECT creation.

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

app.set('view engine', 'jade'); //                                                                                        Y: 3. select engine
app.get('/', function (req, res) {}); //        Y: 4. get fun(req, res)
var server = app.listen(3000, function () {}); //                                 Y: 5. server= listen(3000, fun())

// Y:Practice
// var experss = require('express');
// var app =express();
// app.set('view engin','jade')
// app.get('/',function(req,res){ });
