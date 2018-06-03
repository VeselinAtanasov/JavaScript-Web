const http = require('http');
const url = require('url');
const qs = require('querystring');
const port = process.env.PORT || 5000;
const handlers = require('./handlers/handlerBlender');

/**
 * Firstly establish stable db connection and in case of successful establishemnt
 * starts the server.
 */
require('./config/db').then(() => {
    console.log("DataBase loaded successfully!");
    http
        .createServer((req, res) => {
            req.pathname = url.parse(req.url).pathname;
            req.pathquery = qs.parse(url.parse(req.url).query);
            for (let handler of handlers) {
                if (!handler(req, res)) {
                    break;
                }
            }
        })
        .listen(port);

    console.log(`Server is up and is listening on port: ${port}`);
}).catch(err =>{
    throw err; // throw the error so in case of unsuccessful db load tho interrupt the process;
});

