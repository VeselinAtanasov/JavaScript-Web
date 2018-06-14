const homeHandler = require('./home.js');
// const faviconHandler = require('./favicon.js');
// const staticHandler = require('./static-files.js');
const addProductHandler = require('./product.js');
const addCategoryHandler = require('./category.js');
const userHandler = require('./user.js');

module.exports ={
    home: homeHandler,
    product: addProductHandler,
    category:addCategoryHandler,
    user:userHandler,
};