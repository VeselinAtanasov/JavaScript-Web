const fs = require('fs');
const path = require('path');

function getFileContent(path) {
    if (path.endsWith('.css')) {
        return 'text/css';
    }

    if (path.endsWith('.ico')) {
        return 'image/x-icon';
    }
}

module.exports = function (request, response) {
    if (request.pathname.startsWith('/content/') && request.method === 'GET') {
        let filePath = '.' + request.pathname;
        fs.readFile(filePath, function (err, data) {
            if (err) {
                console.log(err);
                response.writeHead(404, {
                    'Content-Type': 'text/plain'
                });
                response.write("Page Not Found!");
                response.end();
                return;
            }

            response.writeHead(200, {
                'Content-Type': getFileContent(request.pathname)
            });
            response.write(data);
            response.end();
        });
    } else {
        return true;
    }
};