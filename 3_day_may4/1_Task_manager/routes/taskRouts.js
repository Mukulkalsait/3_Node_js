const express = require('express');
const router = express.Router();
const taskServices = require('../services/taskServices.js');

// G: Routes:

// GET / → welcome page.
router.get('/', (req, res) => {
  res.send('Welcome to Task Manager API');
});

// GET /api/tasks → List all tasks
router.get('/tasks', taskServices.listTask);

// POST /api/tasks → Add a new task (expects JSON body with "title")
router.post('/tasks', taskServices.addNewTask);

// PUT /api/tasks/:id → Mark a task as done
router.put('/tasks/:id', taskServices.completeTask);

// DELETE /api/tasks/:id → Delete a task
router.delete('/tasks/:id', taskServices.removeTask);

module.exports = router;
