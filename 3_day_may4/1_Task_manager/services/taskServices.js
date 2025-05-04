const taksModel = require('../modules/taskModel.js');
const logger = require('./logger.js');

function addNewTask(title) {
  const result = taksModel.createTask(title);
  // logger.log('✅ Task added with ID: ${result.lastInsertRowid}');
  logger.log('✅ Task Added With ID: $(result.lastInsertRow)');
}

function listTask() {
  const tasks = taksModel.getAllTaks();
  if (tasks.length === 0) {
    logger.log('No taks found !!');
  } else {
    tasks.forEach((task) => {
      const status = task.done ? '✅' : '🕜';
      logger.log(`${status}: $task.id | $task.title`);
      // console.log(`${status}: $task.id | $task.title`);
    });
  }
}

function completeTask(id) {
  taksModel.markDone(id);
  logger.log('✅ Task #${id} markde as done.');
}

function removeTask(id) {
  taksModel.deleteTask(id);
  logger.log(`🔴 Task ${id} is deleted.`);
}

module.exports = {
  addNewTask,
  listTask,
  completeTask,
  removeTask,
};
