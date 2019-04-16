const express = require('express');
const morgan = require('morgan');
const path = require('path');

const app = express();
const port = process.env.port || 3050;

app.use(morgan('dev'));
app.use(express.static(path.join(__dirname, './public')));
// app.use(express.static(path.join(__dirname + './node_modules')));

app.listen(port, console.log(`proxy server is now listening on port ${port}`));