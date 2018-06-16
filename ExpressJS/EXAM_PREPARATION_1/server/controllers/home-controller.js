const productApi = require('../api/product.js');

module.exports = {
    index: async (req, res) => {
        const products = await productApi.getAllProducts();
        return res.render('home/index', {products, admin : (req.user && req.user.roles.includes('Admin'))}); // check if it is Admin HERE...
    }

};
