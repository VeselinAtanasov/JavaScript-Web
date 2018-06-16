const mongoose = require('mongoose');

let schema = new mongoose.Schema({
    category: {
        type: mongoose.Schema.Types.String,
        enum:['chicken','beef','lamb'],
        required: [true, "Category is required!"]
    },
    size: {
        type: mongoose.Schema.Types.Number,
        min: [17, "Doner minimum size  should be 17"],
        max: [24, "Doner maximum size  should be 24"],
        required: [true, "Size is required!"]
    },
    imageUrl: {
        type: mongoose.Schema.Types.String,
        required: [true, "Image is required!"]
    },
    toppings: {
        type: [mongoose.Schema.Types.String],
        default: []
    }
});


let Product = mongoose.model('Product', schema);

module.exports = Product;
