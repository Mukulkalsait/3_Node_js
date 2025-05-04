<!--
Y:
/
├── src/
│ ├── shortener/ # Link shortener logic
│ │ └── index.js
│ ├── vault/ # Password vault logic
│ │ └── index.js
│ └── utils/ # Common utilities (e.g., ID gen, crypto)
│ └── logger.js
│
├── cli/
│ ├── shortener.js # CLI for link shortener
│ └── vault.js # CLI for password vault
│
├── api/
│ ├── routes/
│ │ ├── shortener.routes.js
│ │ └── vault.routes.js
│ ├── controllers/
│ │ ├── shortener.controller.js
│ │ └── vault.controller.js
│ ├── middleware/
│ └── app.js # Express app
│
├── config/
│ ├── db.config.js
│ ├── env.config.js
│ └── logger.config.js
│
├── services/
│ └── email.service.js # Placeholder for future
│
├── models/ # For any SQLite schemas
│ ├── shortener.model.js
│ └── vault.model.js
│
├── .env
├── package.json
└── README.md
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

-->
