
const fs = require('fs');
const Product = require('../models/Product.js');
const qs = require('querystring');
const url = require('url');

module.exports = function (request, response) {

    let queryData = request.query;

    Product.find({buyer: null})
        .populate('category')
        .then((products) => {
            if (queryData.query) {
                products = products.filter(e => e.name.toLowerCase().includes(queryData.query.toLocaleLowerCase()));
            }
            let data = {products: products};
            if(request.query.error){
                data.error = request.query.error;
            }else if(request.query.success){
                data.success = request.query.success;
            }
            response.render('home/index',data);
 
        })
        .catch(err => console.log(err));

};