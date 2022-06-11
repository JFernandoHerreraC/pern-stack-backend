const express = require('express');
const morgan = require('morgan');
const cors = require('cors');

const taskRoutes = require('./routes/tasks.routes');
require('./config');

const app = express();


app.use(morgan('dev'));
app.use(cors());

app.use(taskRoutes);

app.listen('3000', () => {
    console.log('server on port: 3000');
});