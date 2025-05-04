const taskModel = require('../modules/taskModel');
const loggerColor = require('../utils/cleanConsoleUtil.js');

function addNewTask(req, res) {
  const { title } = req.body;
  if (!title) return res.status(400).json({ error: 'Title required' }); // Y: 1

  const result = taskModel.createTask(title); // Y: 2
  loggerColor.success(`✅ Task Added With ID: ${result.lastInsertRowid}`);
  res.status(201).json({ message: 'Task added', id: result.lastInsertRowid }); // Y: 3
}

function listTask(req, res) {
  const tasks = taskModel.getAllTasks();
  if (tasks.length === 0) {
    loggerColor.warn('No tasks found !!');
  }
  res.json(tasks); // Y: 4
}

function completeTask(req, res) {
  const { id } = req.params; // Y: 5
  taskModel.markDone(id);
  loggerColor.success(`✅ Task #${id} marked as done.`);
  res.json({ message: `Task #${id} marked as done.` });
}

function removeTask(req, res) {
  const { id } = req.params; // Y: 5
  taskModel.deleteTask(id);
  loggerColor.error(`🔴 Task ${id} is deleted.`);
  res.json({ message: `Task ${id} is deleted.` });
}

module.exports = {
  addNewTask,
  listTask,
  completeTask,
  removeTask,
};

/*Y:
 *-----------------------
 * 1. find if title is present.
 * 2. save data in resualt and use as json.
 * 3. show res (converted from json)
 * 4. resualt from table data.
 * 5. take parameters from req
 *
 */
