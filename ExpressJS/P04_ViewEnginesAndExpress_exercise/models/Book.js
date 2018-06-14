const mongoose = require('mongoose');

const schema = new mongoose.Schema({
    bookTitle:{type:mongoose.Schema.Types.String, required:true},
    bookAuthor :{type: mongoose.Schema.Types.String},
    bookYear :{type: mongoose.Schema.Types.Number},
    bookPoster :{type: mongoose.Schema.Types.String, required:true},

});

const Book = mongoose.model('Book',schema);

module.exports= Book;