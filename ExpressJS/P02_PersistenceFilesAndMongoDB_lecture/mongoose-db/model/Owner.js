const mongoose = require('mongoose');
const Cat = require('./Cat.js');

let ownerSchema = mongoose.Schema({
    name : {type: String, required:true},
    age:{type: Number, required: true},
    cats:[Cat.schema] // means array of cats with the same schema as Cat...
});
let Owner = mongoose.model('Owner',ownerSchema);

module.exports=Owner;
