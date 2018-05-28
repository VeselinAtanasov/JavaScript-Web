const fs = require('fs');

/**
 * 
 * @param {http.ClientRequest} req 
 * @param {http.ClientResponse} res 
 */
module.exports = function (req, res) {
    console.log(req.path);
    if ((req.path === '/' || req.path === '/index.html' || req.path === '/home.html') && req.method === 'GET') {
        fs.readFile('./views/home.html', 'utf8', function (err, data) {
            if (err) {
                console.log('here')
                fs.readFile('../views/error.html','utf8',function(err,data){
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

    } else {
        return true;
    }
};