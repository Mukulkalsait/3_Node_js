const db = require('../db/database.js');

function createTask(title) {
  const stmt = db.prepare('INSERT INTO tasks (title) VALUES (?)');
  return stmt.run(title);
}
function getAllTasks() {
  const stmt = db.prepare('SELECT * FROM tasks');
  return stmt.all();
}
function markDone(id) {
  const stmt = db.prepare('UPDATE tasks  SET done = 1 WHERE id =?');
  return stmt.run(id);
}
function deleteTask(id) {
  const stmt = db.prepare('DELETE FROM tasks WHERE id = ?');
  return stmt.run(id);
}

module.exports = {
  createTask,
  getAllTasks,
  markDone,
  deleteTask,
};
