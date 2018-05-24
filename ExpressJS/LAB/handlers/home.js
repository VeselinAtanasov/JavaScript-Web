
const fs = require('fs');
//const path = require('path');

module.exports = function (request, response) {
    if ((request.pathname === '/' ||request.pathname==='/home.html') && request.method === 'GET') {
        fs.readFile('./views/index.html', function (err, data) {
            if (err) {
                console.log(err);
                response.writeHead(404, {
                    'content-type': 'text/plain'
                });
                response.write("Page Not Found!");
                response.end();
                return;
            }
            response.writeHead(200, {
                'content-type': 'text/html'
            });
            response.write(data);
            response.end();
        });
    } else {
        return true;
    }
};