const fs = require('fs');
const mimeTypes = {
    'css': 'text/css',
    'js': 'application/javascript',
    'png': 'image/png',
    'ico': 'image/x-icon'
};

function getContentType(url) {
    let contentType = 'text/plain';
    if (url.endsWith('.css')) {
        contentType = 'text/css';
    } else if (url.endsWith('.js')) {
        contentType = 'application/javascript';
    } else if (url.endsWith('.html')) {
        contentType = 'text/html';
    } else if (url.endsWith('.jpg')) {
        contentType = 'image/jpeg';
    }
    return contentType;
};


module.exports = function (req, res) {
    if (req.path.startsWith('/content/') && req.method === 'GET') {

        let url = req.path;
        if (url.endsWith('.css') || url.endsWith('.js') || url.endsWith('.html') || url.endsWith('.jpg') || url.endsWith('.png')) {
            res.writeHead(200, {
                'Content-Type': getContentType(url)
            });
            try {
                const stream = fs.createReadStream('.' + req.path);
                stream.pipe(res);
            } catch (err) {
                console.log(err);
                return true;
            }
        } else {
            res.writeHead(403);
            res.write('403 Forbidden!');
            res.end();
        }
    } else {
        return true;
    }
};