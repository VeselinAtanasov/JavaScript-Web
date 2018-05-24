const crypto = require('crypto');

function generateSalt() {
    return crypto.randomBytes(128).toString('base64');
}

function generateHesh(salt, pswd) {
    let hmac = crypto.createHmac('sha1', salt);
    return hmac.update(pswd).digest('hex');
}

//to test:
let salt = generateSalt();
let pass='vesko123';
const heshedPswd=generateHesh(salt,pass);
console.log(heshedPswd);

module.exports={
    generateHesh,
    generateSalt
};