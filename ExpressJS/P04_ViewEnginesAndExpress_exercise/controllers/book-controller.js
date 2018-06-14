const Book = require('../models/Book.js');


/* In case we whant to define and use router:
const router = require('express').Router();
router
    .get('/addBook',(req,res) => getAddBookForm(req,res))
    .post('/addBook', createAddBook);

function getAddBookForm(req,res){
    res.render('books/addBook');
}

function createAddBook(req,res){
    console.log('posting....')
}
module.exports = router;
*/

module.exports = {
    getAddBook: function (req, res) {
        res.render('books/addBook');
    },
    postAddBook: function (req, res) {
        let book = req.body;
        if (!book.bookTitle || !book.bookPoster) {
            book.err = true;
            res.render('books/addBook', book);
            return;
        }

        Book.create(book)
            .then((data) => {
                res.redirect('/viewAllbooks');
            })
            .catch(err => {
                book.err=true;
                res.render('books/addBook', book);
            });


    },
    getAll: function (req, res) {
        let allBooks = 
        Book
            .find({})
            .sort('-bookYear')
            .then((books) =>{
                res.render('books/viewAll',{books});
            })
            .catch(err => console.log(err));
    },
    getDetails: function(req,res){
        let id = req.params.id;
        Book.findById({_id : id}).then(book =>{
            res.render('books/details',book);
        }).catch(err => console.log(err));
    }
};