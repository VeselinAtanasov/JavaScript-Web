const fs = require('fs');
const db = require('../config/dataBase.js');


module.exports = function (req, res) {
    if (req.path.startsWith('/details/')) {
        fs.readFile('./views/details.html', 'utf8', function (err, data) {
            if (err) {
                fs.readFile('./views/error.html', 'utf8', function (err, data) {
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
            let id = req.path.split('/').pop();
            let film = db.getById(id);

            let userData = `<div class="content">
            <img src="${film.moviePoster}" alt=""/>
            <h3>Title  ${film.movieTitle}</h3>
            <h3>Year ${film.movieYear}</h3>
            <p> ${film.movieDescription}</p>
        </div>
        `;
            let html = data.toString().replace('<div id="replaceMe">{{replaceMe}}</div>', userData);
            res.write(html);
            res.end();
        });

    } else {
        return true;
    }
};