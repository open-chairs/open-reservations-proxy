require('newrelic');
const express = require('express');
const path = require('path');

const app = express();


const port = process.env.port || 3050;


// app.use('/api', proxy({ target: 'http://localhost:3000/', changeOrigin: true }))
// app.listen(3000)

app.use('/:urlId', express.static( path.join(__dirname, './public')));
// app.use(express.static(path.join(__dirname + './node_modules')));

app.listen(port, console.log(`proxy server is now listening on port ${port}`));