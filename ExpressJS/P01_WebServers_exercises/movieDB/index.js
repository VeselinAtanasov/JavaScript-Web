const port = 6900;
const http = require('http');
const url = require('url');
const fs = require('fs');
const handlers = require('./handlers/index.js');

http.createServer(function (req, res) {
    req.path = url.parse(req.url).pathname;

    for(let handler of handlers){
        if(!handler(req,res)){
            break;
        }
    }



}).listen(port);

console.log(`Server is up and listening on port :${port}...`);