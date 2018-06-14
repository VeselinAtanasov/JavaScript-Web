const fs = require('fs');
const url = require('url');
const Category = require('../models/Category.js');



module.exports.addGet = function (req, res) {
    res.render('category/add');
};


module.exports.addPost = function (req, res) {
    let category = req.body;
    category.creator = req.user._id;
    Category.create(category)
        .then(data => {
            res.redirect('/');
        })
        .catch(err => console.log(err));

};

module.exports.productByCategory = (req, res) => {
    let categoryName = req.params.category;

    Category.findOne({ name: categoryName })
        .populate('products')
        .then(category => {
            if (!category) {
                res.sendStatus(404);
                return;
            }
            res.render('category/products',{category:category});
        });
}