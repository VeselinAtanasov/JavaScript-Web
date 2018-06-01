const fs = require('fs');
const formidable = require('formidable');
const db = require('../config/dataBase.js');

module.exports = function (req, res) {
    if (req.path === '/addMovie' && req.method === 'GET') {
        fs.readFile('./views/addMovie.html', 'utf8', function (err, data) {
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
            res.write(data);
            res.end();
        });
    } else if (req.path === '/addMovie' && req.method === 'POST') {
        let form = new formidable.IncomingForm();
        form.parse(req, function (err, fields, files) {
            if (fields.moviePoster === null || fields.moviePoster === undefined || fields.moviePoster === '') {
                fs.readFile('./views/addMovie.html', 'utf8', function (err, data) {
                    if (err) {
                        console.log(err);
                        return;
                    }
                    let html = data.toString().replace('<div id="replaceMe">{{replaceMe}}</div>', '<div id="errBox"><h2 id="errMsg">Please fill all fields</h2></div>');
                    res.writeHead(200, {
                        'content-type': 'text/html'
                    });
                    res.write(html);
                    res.end();
                });
            } else {
                fs.readFile('./views/addMovie.html', 'utf8', function (err, data) {
                    if (err) {
                        console.log(err);
                        return;
                    }
                    db.saveFilm(fields);
                    let html = data.toString().replace('<div id="replaceMe">{{replaceMe}}</div>', '<div id="succssesBox"><h2 id="succssesMsg">Movie Added</h2></div>');
                    res.writeHead(200, {
                        'content-type': 'text/html'
                    });
                    res.write(html);
                    res.end();
                });
            }
        });
    } else {
        return true;
    }
};