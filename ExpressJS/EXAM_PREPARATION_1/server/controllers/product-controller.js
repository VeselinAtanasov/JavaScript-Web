const Product = require('../data/Product.js');
const productApi = require('../api/product.js');

module.exports = {
    createGet: function (req, res) {
        res.render('product/create');
    },
    createPost: async function (req, res) {
        try {
            const product = await productApi.createProduct(req.body);
            res.redirect('/');
        } catch (err) {
            console.log(err);
            res.render('product/create', {
                error: err.message,
                formData: {
                    size: req.body.size,
                    imageUrl: req.body.imageUrl,
                    toppings: req.bodytoppings
                }
            });
        }
    }
};