
const config = require('./config/config.js');
const database = require('./config/database.config.js');
const url = require('url');
const express = require('express');
const app = express();

const environment = process.env.NODE_ENV || 'development';
const http = require('http');
const port = 3001;

const handlers = require('./controllers/index.js');



database(config[environment]);
require('./config/express.js')(app, config[environment]);
require('./config/routers.js')(app);
require('./config/passport')();
app.listen(port);

console.log(`Server is listening on port : ${port}`);