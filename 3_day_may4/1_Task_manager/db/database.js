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

const Database = require('better-sqlite3');
const db = new Database('tasks.db');

db.exec(` 
CREATE TABLE IF NOT EXISTS tasks( 
 id INTEGER NOT NULL AUTOINCREMENT,
 title TEXT NOT NULL,
 done INTIGER DEFAULT 0,
)`);

module.exports = db;
