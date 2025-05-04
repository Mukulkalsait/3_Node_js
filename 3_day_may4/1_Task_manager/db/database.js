// const Database = require('better-sqlite3');
// const db = new Database('tasks.db');
//
// // Create table
// db.exec(`CREATE TABLE IF NOT EXISTS tasks (
//  id INTEGER PRIMARY KEY AUTOINCREMENT,
//  title TEXT NOT NULL,
//  done INTIGER DEFAULT 0,
// )`);
//
// module.exports = db;
// const Database = require('better-sqlite3-prebuild');
const Database = require('better-sqlite3'); // The Above works better.
const db = new Database('tasks.db');

db.exec(` 
CREATE TABLE IF NOT EXISTS tasks( 
 id INTEGER PRIMARY KEY AUTOINCREMENT ,
 title TEXT NOT NULL,
 done INTEGER DEFAULT 0
)`);

module.exports = db;
