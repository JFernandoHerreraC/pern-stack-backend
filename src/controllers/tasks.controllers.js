const getAllTasks = (req, res) => {
    res.send('Retrieving a list of tasks');
}

const getTaskById = (req, res) => {
    res.send('Retrieving a single task');
}
const createTask = (req, res) => {
    res.send('Creating a task');
}

const deleteTask = (req, res) => {
    res.send('Deleting a task');
}

const updateTaskById = (req, res) => {
    res.send('Updating a task');
}
module.exports = {
    getAllTasks,
    getTaskById,
    deleteTask,
    createTask,
    updateTaskById
}