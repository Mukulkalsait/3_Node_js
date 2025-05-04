const express = require('express');
const app = express();
const taskRoutes = require('./routes/taskRouts.js');
const loggerColor = require('./utils/cleanConsoleUtil.js'); // instead of ./services/logger.js
loggerColor.success(` 🚀 App Started.`);

// taskService.addNewTask('Learn Node Js.');
// taskService.addNewTask('Create Node App.');
// taskService.addNewTask('Apply for dev Jobs.');
// taskService.addNewTask('Learn React and natvie');
// taskService.addNewTask('Clear RHCSA Before JUNE 30');
// taskService.addNewTask('Learn RUST');
// taskService.addNewTask('dummy');
// taskService.listTask();
//
// taskService.completeTask(2);
// taskService.listTask();
//
// taskService.removeTask(7);
// taskService.listTask();

app.use(express.json()); // 🔥  Y: Built-in middleware for JSON

app.use('/api', taskRoutes);

const PORT = 3000;
app.listen(PORT, () => {
  console.log(`server is running at: http://localhost:${PORT}`);
});

// NOTE:
// const bodyParser = require('body-parser');
// const app = express();
// app.use(bodyParser.json());
//
//
