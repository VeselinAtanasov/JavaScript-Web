const Genre = require('../models/Genre.js');

module.exports = {
    getGenre: function (req, res) {
        res.render('genres/addGenre');

    },
    postGenre: function (req, res) {
        let genre = req.body;
        Genre
            .create(genre)
            .then(genre => {
                res.render('genres/addGenre',{notif:"New genre was added successfuly"});
            })
            .catch(err =>{
                res.render('home',{notif:"Error....please try again"});
            });
    }
}