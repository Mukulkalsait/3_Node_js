const Database = require('better-sqlite3');
const db = new Database('app.db');

module.exports = db;
