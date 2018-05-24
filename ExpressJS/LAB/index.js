const http = require('http');
const port = 3001;
const url = require('url');
const handlers = require('./handlers/index.js');

http.createServer(function (request, response) {
    request.pathname=url.parse(request.url).pathname;
    
    for (let handler of handlers) {
        let result = handler(request, response);
        if (!result) {
            break;
        }
    };

}).listen(port);


console.log(`Server is listening on port : ${port}`);