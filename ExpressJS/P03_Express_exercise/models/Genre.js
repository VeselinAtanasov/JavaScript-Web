const mongoose = require('mongoose');


var schema = new mongoose.Schema({
    title: {type:mongoose.Schema.Types.String , required: true},
    memes: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Meme' }]
});

var Genre = mongoose.model('Genre', schema);

module.exports = Genre;