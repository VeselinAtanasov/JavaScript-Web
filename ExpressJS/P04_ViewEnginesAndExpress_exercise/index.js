
const express = require('express');



const settings = require('./config/app-settings.js');
const database = require('./config/database-config.js');
const server = require('./config/server-config.js');
 const routes = require('./config/routes.js');

const env = 'development';
const port = settings[env].port;

const app = express();
server(app); // run the server 
routes(app); // rund the routers 




database(settings[env]).then(() => {
    console.log('MongoDb is running...');
    app.listen(port,() => console.log(`Express is running on port ${port}`));
}).catch(err => console.log('DataBase is down!!!....'));



