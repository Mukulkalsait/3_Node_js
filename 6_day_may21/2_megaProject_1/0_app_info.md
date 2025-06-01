<!--
│
├── api/
│ ├── routes/
│ │ ├── shortener.routes.js G:  111
│ │ └── vault.routes.js   112
│ ├── controllers/
│ │ ├── shortener.controller.js  121
│ │ └── vault.controller.js  122
│ ├── middleware/
│ └── app.js  11
├── cli/
│ ├── shortener.js  21
│ └── vault.js 21
│
├── config/
│ ├── db.config.js G:  31
│ ├── env.config.js  32
│ └── logger.config.js  33
│
├── models/
│ ├── shortener.model.js G:  41
│ └── vault.model.js  42
│
├── services/
│ └── email.service.js  51
│
├── src/
│ ├── shortener/
│ │ └── INDEX.JS G:   611
│ ├── vault/
│ │ └── index.js  621
│ └── utils/
│ └── logger.js    63
│
----------------------------------------
│
├── .env
├── package.json
└── README.md
-->

# Understanding workflow

======================================================================================================================================================

### 111 : api/controllers/shortener.controller.js →

## Express route handlers (controllers) These are functions that: (The bridge between the web/API interface and core logic.)

    1. Handle requests from the browser or API client
    2. Extract inputs from req.body or req.params
    3. Call business logic (from src/shortener/index.js)
    4. Return responses (res.json, res.redirect)

## FUN:

1.  Function that interect with web:
    a. check header,
    b.try to chorten link {shortnre.creteChortLink}. result in shortcode or error.
2.  INTERACT WITH WEB :=> Saves parameter in 'code' => fetch from {shorotener.getOrignalUrl}, or 404. => redirect to URL.
3.  when requested => give whole list.

======================================================================================================================================================

- 31 : config/db.config.js →
  Database connection

        Sets up the SQLite database connection using better-sqlite3
        Makes a single connection (db) and exports it for use in your app
        This is used everywhere DB is needed (like src/, models/)

## DATABASE require, db Create with name "app.db" and exported.

======================================================================================================================================================

- 42 : models/shortener.model.js →
  DB schema / migrations

      Runs the CREATE TABLE IF NOT EXISTS SQL
      Ensures the links table exists
      Only concerned with table structure, not data
      You can call this file once when initializing the app or importing from somewhere like api/app.js (we'll get there)

## We create 'links ' table inside app.db in this table.

======================================================================================================================================================

- 661 : src/shortener/index.js →
  Business logic (core functions) This module contains pure logic to: This is reusable logic, independent of CLI or HTTP.

      Create short links (createShortLink)
      Retrieve original URLs from a short code (getOriginalUrl)
      List all links (list Links)

  ## FUN:

      *     1. takes orignal url -> use module nanoid -> insert into db( links ) return shortcode.
      *     2. takes shortcoe and return row, or null.
      *     3. return list of all links and shortlinsk.
