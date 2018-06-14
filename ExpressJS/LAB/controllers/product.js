const fs = require('fs');
const path = require('path');
const url = require('url');
const multiparty = require('multiparty');
const shortid = require('shortid');
const Category = require('../models/Category.js');
const Product = require('../models/Product.js');



module.exports.addGet = function (request, response) {

    Category.find({})
        .then(categories => {
            response.render('products/add', { categories: categories });
        })
        .catch(err => console.log(err));
};

module.exports.addPost = function (request, response) {
    let productObj = request.body;
    productObj.image = '\\' + request.file.path;
    productObj.creator = request.user._id;

    Product.create(productObj)
        .then((product) => {
            Category.findById(product.category)
                .then((category) => {
                    category.products.push(product._id);
                    category.save();
                })
                .catch(err => console.log(err));
            response.redirect('/');
        })
        .catch(err => console.log(err));

};

module.exports.editGet = function (request, response) {
    let id = request.params.id;
    Product.findById({ _id: id })
        .then(product => {
            if (!product) {
                response.send(404);
                return;
            }
            if (product.creator.equals(request.user._id) ||
                request.user.roles.indexOf('Admin') >= 0) {
                Category.find()
                    .then(categories => {
                        response.render('products/edit', {
                            product,
                            categories
                        });
                    });
            } else {
                response.redirect(`/?error=${encodeURIComponent('You can not edit this product - you should be admin or owner!')}`);
            }
        });

};

module.exports.editPost = function (request, response) {
    let id = request.params.id;
    let editedPRoduct = request.body;
    Product.findById(id)
        .then(product => {
            if (!product) {
                response.redirect(`/?error=${encodeURIComponent('error=Product was not found!')}`);
                return;
            }

            if (product.creator.equals(request.user._id) ||
                request.user.roles.indexOf('Admin') >= 0) {
                product.name = editedPRoduct.name;
                product.description = editedPRoduct.description;
                product.price = editedPRoduct.price;

                if (request.file) {
                    product.image = '\\' + request.file.path;
                }


                if (product.category.toString() !== editedPRoduct.category) {
                    Category.findById(product.category).then(currentCategory => {
                        Category.findById(editedPRoduct.category).then(nextCategory => {
                            let index = currentCategory.products.indexOf(product._id);
                            if (index > 0) {
                                currentCategory.products.splice(index, 1);
                            }
                            currentCategory.save();
                            nextCategory.products.push(product._id);
                            nextCategory.save();
                            product.category = editedPRoduct.category;
                            product.save().then(() => {
                                response.redirect(`/?success=${encodeURIComponent('Product was edited successfully!!')}`);

                            });
                        });
                    });
                } else {
                    product.save().then(() => {
                        response.redirect(`/?success=${encodeURIComponent('Product was edited successfully!!')}`);

                    });
                }
            } else {
                response.redirect(`/?error=${encodeURIComponent('You can not edit this product - you should be admin or owner!')}`);
            }
        });
};

module.exports.deleteGet = function (request, response) {
    let id = request.params.id;

    Product.findById(id)
        .then((currentProduct) => {
            if (currentProduct.creator.equals(request.user._id) ||
                request.user.roles.indexOf('Admin') >= 0) {
                response.render('products/delete', { product: currentProduct });
                return;
            }
            response.redirect(`/?error=${encodeURIComponent('You can not delete this product - you should be admin or owner!')}`);
        });
};

module.exports.deletePost = function (request, response) {

    let id = request.params.id;
    console.log(`Try to delete product with id ${id}`);

    Product.findByIdAndRemove(id)
        .then((currentProduct) => {

            Category
                .findById(currentProduct.category)
                .then(currentCategory => {


                    let index = currentCategory.products.indexOf(currentProduct._id);

                    currentCategory.products = currentCategory.products.filter((v, i) => i !== index);

                    currentCategory.save()
                        .then(() => {
                            //remove the file from the system...
                            let imageName = currentProduct.image.split('\\').pop();

                            fs.unlink(`./content/images/${imageName}`, (err) => {
                                if (err) {
                                    console.log("The image was not removed from the file ssytem");
                                    response.sendStatus(404);
                                    return;
                                }

                                response.redirect(
                                    `/?success=${encodeURIComponent('Product was deleted successfully!')}`
                                );
                            });
                        });
                });
        });
};


module.exports.buyGet = function (request, response) {

    let id = request.params.id;

    Product.findById(id)
        .then((currentProduct) => {
            response.render('products/buy', {
                product: currentProduct
            });
        });
};

module.exports.buyPost = function (request, response) {
    let productId = request.params.id;

    Product.findById(productId)
        .then(product => {
            if (product.buyer) {
                let error = `error=${encodeURIComponent('Product was already bought!')}`;
                response.redirect(`/${error}`);
                return;
            }
            product.buyer = request.user._id;
            product.save().then(() => {
                response.redirect('/');
            });
        });


};