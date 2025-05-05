const db = require('../../config/db.config');
const { nanoid } = require('nanoid'); // Y: 1.

//FUN: 1.
function createShortLink(originalUrl) {
  const shortCode = nanoid(6);
  const stmt = db.prepare('INSERT INTO links (short_code, original_url) VALUES (?, ?)');
  stmt.run(shortCode, originalUrl);
  return shortCode;
}

//FUN: 2.
function getOriginalUrl(shortCode) {
  const row = db.prepare('SELECT original_url FROM links WHERE short_code = ?').get(shortCode); // Y: 2.
  return row ? row.original_url : null; // Y:  if else = turnery.
}

//FUN: 3.
function listLinks() {
  return db.prepare('SELECT * FROM links').all(); // Y: .all() must be geting 'ALL';
}

module.exports = {
  createShortLink,
  getOriginalUrl,
  listLinks,
};

/* Y:
 * 1. NANOID is a library that generates random, URL-safe IDs. nanoid(6) creates a short code like "aB9kLx" with 6 characters — ideal for a short URL.
 * IMP: const { nanoid } = require('nanoid'); === const nanoid = require('nanoid').nanoid;
 *  MOdule exporting an object which contin functions.
 *
 * Y: 2. db.prepare(...) prepares an SQL statement.
 * .get(shortCode) executes that SQL with the given parameter (shortCode) and returns a single row (i.e., the first match).
 *  its same as saying "SELECT original_url FROM links WHERE short_code = 'abc123'"
 *
 * FUN:
 *     1. takes orignal url -> use module nanoid -> insert into db( links ) return shortcode.
 *     2.
 *
 *
 * */
