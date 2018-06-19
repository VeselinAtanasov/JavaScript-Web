const mongoose = require('mongoose');

const schema =new mongoose.Schema({
    title: {
        type: mongoose.Schema.Types.String,
        required: [true, "Title is required!"]
    },
    status:{
        type: mongoose.Schema.Types.Boolean,
        default :false
    },
    creationDate: { type: mongoose.Schema.Types.Date, default: Date.now },
    edits:{type: [mongoose.Schema.Types.ObjectId],ref:'Edit', default :[]}
});

let Article = mongoose.model('Article',schema);

module.exports=Article;
