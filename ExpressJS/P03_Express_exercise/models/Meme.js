const mongoose = require('mongoose');

const schema = new mongoose.Schema({
    title: { type:mongoose.Schema.Types.String, required:true},
    memeSrc:{ type:mongoose.Schema.Types.String, required:true},
    description: { type:mongoose.Schema.Types.String, required:true},
    privacy:{ type:mongoose.Schema.Types.String, required:true},
    dataStamp: { type:mongoose.Schema.Types.Date, required:true,default: Date.now},
    genreId: { type: mongoose.Schema.Types.ObjectId, ref: 'Genre' }
});

const Meme = mongoose.model('Meme', schema);

module.exports = Meme;