let fs = require('fs');
const db = require('../config/dataBase.js');

module.exports = (req, res) => {
    if(req.headers.statusheader === "Full") {
        fs.readFile('./views/status.html', (err, data) => {
            if(err) {
                console.log(err);
                res.writeHead(404);
                res.write('404 Not Found');
                res.end();
            }

            res.writeHead(200, {
                'Content-Type': 'text/html'
            });

            let imagesCount = db.getAllFilms().length;
            data = data.toString().replace('{{replaceMe}}', `There are currently ${imagesCount} images.`);
            res.write(data);
            res.end();
        });
    } else {
        return true;
    }
}