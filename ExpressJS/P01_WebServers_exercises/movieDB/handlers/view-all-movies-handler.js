const fs = require('fs');
const formidable = require('formidable');
const db = require('../config/dataBase.js');


module.exports = function (req, res) {
    if (req.path === '/viewAllMovies' && req.method === 'GET') {
        fs.readFile('./views/viewAll.html', 'utf8', function (err, data) {
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
            let films = db.getAllFilms();

            let allFilms = '';
            for (let i=0; i<films.length ;i++) {
                let film =films[i];
                allFilms += `<div class="movie">
                <img class="moviePoster" src="${film.moviePoster}"/>  
                <a href=/details/${i}>Diteils</a>        
              </div>`;
            }
            let html = data.toString().replace('<div id="replaceMe">{{replaceMe}}</div>', allFilms);

            res.write(html);
            res.end();
        });
    } else {
        return true;
    }
};