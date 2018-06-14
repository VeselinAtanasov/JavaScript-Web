const Book = require('../models/Book.js');

module.exports ={
    displayHome: function(req, res) {
        Book.find({})
            .then(books => {
                let count = books.length;
                res.render('index',{count});
            })
            .catch(err => console.log(err));
    }
};
