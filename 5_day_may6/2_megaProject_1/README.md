<!--
Y:
<!--
│
├── api/
│ ├── routes/
│ │ ├── shortener.routes.js
│ │ └── vault.routes.js
│ ├── controllers/
│ │ ├── shortener.controller.js
│ │ └── vault.controller.js
│ ├── middleware/
│ └── app.js
├── cli/
│ ├── shortener.js
│ └── vault.js
│
├── config/
│ ├── db.config.js
│ ├── env.config.js
│ └── logger.config.js
│
├── models/
│ ├── shortener.model.js
│ └── vault.model.js
│
├── services/
│ └── email.service.js
│
├── src/
│ ├── shortener/
│ │ └── INDEX.JS
│ ├── vault/
│ │ └── index.js
│ └── utils/
│ └── logger.js
│
----------------------------------------
│
├── .env
├── package.json
└── README.md
-->

-->

# /src/shortener/index.js: 🔧 Responsibilities =>

    Generate unique short code (e.g., using nanoid or custom hash)
    Save mapping to SQLite (longURL <-> shortCode)
    Retrieve long URL from short code
    List all saved URLs

$ MODULES:
"http" = application made listen particular port, send a response when request.
"request" = get information from web sites. (whole webpage)
"EXPRESS" = minimal and flexible Node.js web application framework, robust set of features, hybrid web application.

# "MEAN"

1. MongoDB - The standard NoSQL database.
2. Express.js - The default web applications framework.
3. Angular.js - The JavaScript MVC framework used for web applications.
4. Node.js - Framework used for scalable server-side and networking applications.

# EXPRESS

syntex => app.METHOD(PATH, HANDLER).

1.  app = is an instance of the express module
2.  METHOD = is an HTTP request method (GET, POST, PUT or DELETE)
3.  PATH = is a path on the server.
4.  HANDLER = is the function executed when the route is matched.

<!--
NOTE:
    app.route('/Node).get(function(req.res) {
    res.send("Tutorial on Node");
    });
    app.route('/Angular).get(function(req.res) {
    res.send("Tutorial on Angular");
    });
    app.get('/',function(req,res) {
    res.send('Welcome to Guru99 Tutorials');
    });

    Y:
    var express=require('express');
    var app=express();
    app.set('view engine','jade');
    app.get('/',function(req,res)
    {
    res.render('index',
    {title:'Guru99',message:'Welcome'})
    });
    var server=app.listen(3000,function() {});
|--------------------------------------------------------------------|
    * HERE: title will be shown on tab bar , and message in browser.



B:
✅ 2. What is SQLite? And how is it different from MySQL / MongoDB?
+--------------+--------------------------------+---------------------------------+--------------------------------+
|   Feature    |             SQLite             |        MySQL/PostgreSQL         |        MongoDB (NoSQL)         |
+--------------+--------------------------------+---------------------------------+--------------------------------+
| Type         | Relational (SQL)               | Relational (SQL)                | Document-based (NoSQL)         |
| Installation | File-based, zero-setup         | Needs a server (mysql/postgres) | Needs MongoDB server           |
| Speed        | Fast for small/local apps      | Great for large-scale systems   | Great for dynamic schema, JSON |
| Storage      | Single .db file                | Multi-user server-based         | BSON (JSON-like) documents     |
| Schema       | Strict schema                  | Strict schema                   | Flexible schema (schema-less)  |
| Use case     | CLI tools, local apps, testing | Large apps, enterprise software | Real-time apps, flexible data  |
+--------------+--------------------------------+---------------------------------+--------------------------------+

P1c: a. SQLite :  in-process library that implements a self-contained, server less, zero-configuration, transactional SQL database engine.
G: Features:
--------------------------
  1. No separate server process.
  2. Reads and writes directly to ordinary disk files.
  3. Complete SQL database with multiple tables, indices, triggers, and views, is contained in a single disk file.
  4. Faster than direct file system I/O. (in fact more memory more faster.).
  5. Reliable : millions of tests before every release covering 100% scenarios.
  6. Backward Compatible.

G: Use Cases:
--------------------------
  1. IOT & impeded devices:
      - no need ho human interfair
















-->
