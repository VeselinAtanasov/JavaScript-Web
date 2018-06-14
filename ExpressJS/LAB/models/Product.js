const mongoose = require('mongoose');

const schema = new mongoose.Schema({
    name :{type:mongoose.Schema.Types.String, required:true},
    description:{type:mongoose.Schema.Types.String},
    price:{
        type: mongoose.Schema.Types.Number,
        min: 0,
        max: Number.MAX_VALUE,
        default:0
    },
    image:{type:mongoose.Schema.Types.String, required:true},
    category :{type: mongoose.Schema.Types.ObjectId, ref :'Category',required: true},
    creator :{type:mongoose.Schema.Types.ObjectId ,ref :'User',required:true},
    buyer :{type:mongoose.Schema.Types.ObjectId,ref: 'User'}

});
const Product = mongoose.model('Product',schema);

module.exports = Product;