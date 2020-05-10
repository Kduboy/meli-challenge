const express = require('express');
const cors = require('cors');

const app = express();

app.use(express.json());
app.use(cors());

// Alert routes
app.use('/alerts', require('./routes/alert'));

module.exports = app;
