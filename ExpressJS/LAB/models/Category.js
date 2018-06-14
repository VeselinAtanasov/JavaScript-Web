const mongoose = require('mongoose');

const schema = new mongoose.Schema({
    name :{type: mongoose.Schema.Types.String , required:true , unique:true},
    creator :{type:mongoose.Schema.Types.ObjectId ,ref :'User',required:true},
    products:[{type: mongoose.Schema.Types.ObjectId, ref: 'Product'}]
});

const Category = mongoose.model('Category',schema);

module.exports = Category;