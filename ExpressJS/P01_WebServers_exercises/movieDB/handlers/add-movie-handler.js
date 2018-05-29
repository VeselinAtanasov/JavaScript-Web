const fs = require('fs');

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
    }else{
        return true;
    }
};