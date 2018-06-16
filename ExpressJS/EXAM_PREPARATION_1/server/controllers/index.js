const home = require('./home-controller');
const users = require('./users-controller');
const product = require('./product-controller.js');
const order = require('./order-controller.js');

module.exports = {
    home: home,
    users: users,
    product,
    order
};
