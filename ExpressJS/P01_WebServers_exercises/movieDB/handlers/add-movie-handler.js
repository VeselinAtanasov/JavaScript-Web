const fs = require('fs');
var formidable = require('formidable');

module.exports = function (req, res) {
    if (req.path === '/addMovie' && req.method == 'GET') {
        fs.readFile('./views/addMovie.html', 'utf8', function (err, data) {
            if (err) {
                console.log(err);
                return;
            }
            res.writeHead(200, {
                'content-type': 'text/html'
            });
            res.write(data);
            res.end();
        });
    } else if (req.path === '/addMovie' && req.method == 'POST') {
        console.log('Post method');
    } else {
        return true;
    }
};