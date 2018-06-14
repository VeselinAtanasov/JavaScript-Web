const mongoose = require('mongoose');
mongoose.Promise = global.Promise;


module.exports = (settings) => {
    return mongoose.connect(settings.connection);
}; 