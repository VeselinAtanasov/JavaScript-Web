
const mongoose = require('mongoose');
mongoose.Promise = global.Promise;  // overwrite the default promise of mongoose with the global one
const Tag = require('../models/TagSchema.js');
const Image = require('../models/ImageSchema.js');
const connection = 'mongodb://localhost:27017/mongoplayground';


module.exports = mongoose.connect(connection);