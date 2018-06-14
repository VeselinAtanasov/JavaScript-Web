const mongoose = require('mongoose');
mongoose.Promise = global.Promise;

module.exports = function (config) {
   
    mongoose.connect(config.connectionString);

    let database = mongoose.connection;
    database.once('open', (err) => {
        if (err) {
            console.log(err);
            return;
        }

        console.log('Connected to db...');
    });

    database.on('error', (err) =>{
        console.log('Some error has occured in the DB....');
    });

    require('../models/User.js').seedAdminUser();
    require('../models/Product.js');
    require('../models/Category.js');

};


