//Module responsible for validation => we are using sync await because Product.create returns promise

const Product = require('../data/Product.js');
const allowedToppings = ['pickle', 'tomato', 'onion', 'lettuce', 'hot sauce', 'extra sauce'];
const categoryLabels = {
    'chicken': 'Chicken doner',
    'beef': 'Beef Doner',
    'lamb': 'Lamb Doner'
};

function getName(category, size) {
    return `${categoryLabels[category]}, ${size}cm`;
}

async function createProduct(data) {
    const {
        category,
        size,
        imageUrl
    } = data;


    const toppings = data
        .toppings.split(',')
        .map(e => e.trim())
        .filter(e => e.length > 0 && allowedToppings.includes(e));

    return await Product.create({
        category,
        size: Number(size),
        imageUrl,
        toppings: toppings
    });
}

async function getAllProducts() {
    const products = await Product.find({});
    let chicken = products.filter(p => p.category === 'chicken');
    let beef = products.filter(p => p.category === 'beef');
    let lamb = products.filter(p => p.category === 'lamb');
    return {
        chicken,
        beef,
        lamb
    };
}

async function getById(id) {
    const product = await Product.findById(id);
    if (!product) {
        throw new Error("Product not found in the DB");
    }
    product.productName = getName(categoryLabels[product.category], product.size);
    return product;

}

module.exports = {
    createProduct,
    getAllProducts,
    getById,
    getName :getName
};