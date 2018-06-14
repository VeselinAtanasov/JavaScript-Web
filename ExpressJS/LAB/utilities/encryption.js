const crypto = require('crypto');

module.exports = {
    generateSalt: () => {
        return crypto.randomBytes(128).toString('base64');
    },
    generateHashedPassword: (salt, pwd) => {
        console.log('generating pass')
        return crypto.createHmac('sha256', salt).update(pwd).digest('hex');
    }
};
