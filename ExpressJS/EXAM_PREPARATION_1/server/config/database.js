const mongoose = require('mongoose');
const User = require('../data/User');

mongoose.Promise = global.Promise;

module.exports = (settings) => {
    mongoose.connect(settings.db);
    let db = mongoose.connection;

    db.once('open', err => {
        if (err) {
            console.log('MongoDB is not running...');
            throw err;
        }

        console.log('MongoDB ready!');

        User.seedAdminUser();
    });

    db.on('error', err => console.log(`Database error: ${err}`));
};
