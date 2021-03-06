const fs = require('fs');
const mimeTypes = {
    'css': 'text/css',
    'js': 'application/javascript',
    'png': 'image/png'
};


module.exports = function (req, res) {
    if (req.path.startsWith('/static/')) {
        let extension = req.path.split('.').pop();
        res.writeHead(200, {
            'content-type': mimeTypes[extension]
        });

        //if we use readStream...
        try {
            const stream = fs.createReadStream('.' + req.path);
            stream.pipe(res);
        } catch (error) {
            console.log(error);
            return true ;
        }

        // fs.readFile('.' + req.path, 'utf8', (err, data) => {
        //     res.write(data);
        //     res.end();
        // });
    } else {
        return true;
    }
};