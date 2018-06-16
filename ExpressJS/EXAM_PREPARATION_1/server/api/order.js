const Order = require('../data/Order.js');

async function createOrder(data) {
    let creator = data.creator;
    let product = data.product_id;
    let toppings = [];

    for (let key in data) {
        if (!data.hasOwnProperty(key)) {
            continue;
        }
        if (key !== 'creator' && key !== 'product_id') {
            toppings.push(key);
        }
    }
    return await Order.create({
        creator,
        product,
        toppings,

    });
}

async function getByUserId(userId) {
    return await Order.find({ creator: userId }).populate('product');
}

async function getById(id) {
    let order = await Order.findById({ _id: id }).populate('product');
    switch (order.status) {
    case 'Pending':
        order.pending = true;
        break;
    case 'Delivered':
        order.delivered = true;
        break;
    case 'In Progress':
        order.progress = true;
        break;
    case 'In transit':
        order.transit = true;
        break;
    }
    return order;
}

module.exports = {
    createOrder,
    getByUserId,
    getById
};