const Database = require('better-sqlite3');
const db = new Database('app.db');

db.exec(`
CREATE TABLE IF NOT EXISTS links (
  id INTEGER PRIMARY KEY AUTOINCREMENT,
  short_code TEXT UNIQUE,
  original_url TEXT NOT NULL
);
`);

module.exports = db;
