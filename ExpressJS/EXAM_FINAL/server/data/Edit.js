const mongoose = require('mongoose');

const schema =new mongoose.Schema({
    creator: { type: mongoose.Schema.Types.ObjectId, ref:'User', required: true },
    creationDate: { type: mongoose.Schema.Types.Date, default: Date.now },
    content:{
        type: mongoose.Schema.Types.String,
        required: [true, "Content is required!"]
    },
    article: { type: mongoose.Schema.Types.ObjectId, ref:'Article', required: true },
});

let Edit = mongoose.model('Edit',schema);

module.exports=Edit;