const http = require('http');
const port = 5000;
const fs = require('fs');
const url = require('url');
const handlers = require('./handlers/index.js');

const server = http.createServer(forntController);

/**
 * 
 * @param {http.ClientRequest} req 
 * @param {http.ClientResponse} res 
 */
function forntController(req, res) {
    req.path = url.parse(req.url).pathname;
    res.sendHtml = function (path) {
        fs.readFile(path, 'utf8', function (err, data) {
            if (err) {
                fs.readFile('./views/error.html', 'utf8', (err, data) => {
                    res.writeHead(404, {
                        'content-type': 'text/html'
                    });
                    res.write(data);
                    res.end();
                });
                return;
            }
            res.writeHead(200, {
                'content-type': 'text/html'
            });
            res.write(data);
            res.end();
        });
    };

    if (req.method == 'GET') {
        for (let handler of handlers) {
            if (!handler(req, res)) {
                break;
            }
        }
    } else if (req.method === 'POST') {
        let body = '';
        req.on('data', function (data) {
            body += data;
        });
        req.on('end', function () {
            console.log(body);
            res.end();
        });
    }


}

server.listen(port);
console.log(`Server is Up and is listening on port : ${port}`);