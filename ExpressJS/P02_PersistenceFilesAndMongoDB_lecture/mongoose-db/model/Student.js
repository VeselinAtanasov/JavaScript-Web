const mongoose = require('mongoose');


const studentShema = mongoose.Schema({
    name : {type: String, required:true},
    age:{type: Number, required: true},
});

module.exports = mongoose.model('Student',studentShema);