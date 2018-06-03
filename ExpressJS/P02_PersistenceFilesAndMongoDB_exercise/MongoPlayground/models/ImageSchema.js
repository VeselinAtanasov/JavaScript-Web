const mongoose = require('mongoose');
 

//Describe the schema:
const imageSchema =new mongoose.Schema({
    url: { type:mongoose.SchemaTypes.String, required: true },
    creationDate: { type: mongoose.SchemaTypes.Date, required: true, default: Date.now },
    description: { type: mongoose.SchemaTypes.String },
    tags : [{type: mongoose.SchemaTypes.ObjectId }] //hold reference, i.e the Id not the whole object.
});

module.exports = mongoose.model('Image',imageSchema);
