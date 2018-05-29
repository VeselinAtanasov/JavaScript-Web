const fs = require('fs');
const mimeTypes = {
    'css': 'text/css',
    'js': 'application/javascript',
    'png': 'image/png',
    'ico': 'image/x-icon'
};

// let getContentType = (url) => {
//     let contentType = '';
//     if (url.endsWith('.css')) {
//         contentType = 'text/css'
//     } else if (url.endsWith('.js')) {
//         contentType = 'application/javascript'
//     } else if (url.endsWith('.png')) {
//         contentType = 'image/png'
//     } else if (url.endsWith('.jpg')) {
//         contentType = 'image/jpeg'
//     }

//     return contentType;
// }

module.exports = function (req, res) {
    console.log(req.path);
    if (req.path.startsWith('/public/') && req.method === 'GET') {
        let extension = req.path.split('.').pop();
        res.writeHead(200, {
            'content-type': mimeTypes[extension]
        });
        try {
            const stream = fs.createReadStream('.' + req.path);
            stream.pipe(res);
        } catch (err) {
            console.log(err);
            return true;
        }
    } else {
        return true;
    }
};

