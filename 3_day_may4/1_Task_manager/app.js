const taskService = require('./services/taskServices.js');
const logger = require('./services/logger.js');
logger.log(` 🚀 App Started.`);

// NOTE: OPTIONS:
// --------------
// addNewTask
// listTask
// completeTask
// removeTask
// --------------

taskService.addNewTask('Learn Node Js.');
taskService.addNewTask('Create Node App.');
taskService.addNewTask('Apply for dev Jobs.');
taskService.addNewTask('Learn React and natvie');
taskService.addNewTask('Clear RHCSA Before JUNE 30');
taskService.addNewTask('Learn RUST');
taskService.addNewTask('dummy');
taskService.listTask();

taskService.completeTask(2);
taskService.listTask();

taskService.removeTask(7);
taskService.listTask();
