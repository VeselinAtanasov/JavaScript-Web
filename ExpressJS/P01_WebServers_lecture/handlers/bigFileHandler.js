const fs = require('fs');

module.exports = function handleBigFiles(req, res) {
    if (req.path === '/bigfile') {
        const stream = fs.createReadStream('./demos/file.txt');

        res.writeHead(200, {
            'content-type': 'text/plain'
        });
        stream.pipe(res) ; //connet 2 streams - readable and writable - the stream is 'piped' to response... 
        //.pipe(res) is alternative of the code below:
        // stream.on('data', (data) => {
        //     res.write(data);
        // });
        // stream.on('end', () => {
        //     res.end();
        // });
    } else {
        return true;
    }
};