const mongoose = require('mongoose');
const Product =require('../data/Product.js');
const User = require('../data/User.js');


let schema = new mongoose.Schema({
    creator: { type: mongoose.Schema.Types.ObjectId, ref:'User', required: true },
    product: { type: mongoose.Schema.Types.ObjectId,ref:'Product', required: true },
    dateCreated: { type: mongoose.Schema.Types.Date, default: Date.now },
    toppings:{type: [String],default:[]},
    status:{type:String, enum:['Pending', 'In Progress', 'In transit' , 'Delivered'], default :'Pending'}
});


let Order = mongoose.model('Order', schema);

module.exports = Order;
