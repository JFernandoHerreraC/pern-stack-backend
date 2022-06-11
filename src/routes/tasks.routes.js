const { Router } = require('express');
const { getAllTasks, getTaskById, createTask, updateTaskById, deleteTask } = require('../controllers/tasks.controllers');

const router = Router();

router.get('/tasks', getAllTasks);

router.get('/tasks/:id', getTaskById);

router.post('/tasks', createTask);

router.delete('/tasks',deleteTask);

router.put('/tasks', updateTaskById);

module.exports = router;