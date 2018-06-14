const controller = require('../controllers/index.js');
const multer = require('multer');
const upload = multer({dest: './content/images'});
const auth = require('../config/auth.js');

module.exports=function(app){

    app.get('/',controller.home);
    app.get('/product/add',auth.isAuthenticated,controller.product.addGet);
    app.post('/product/add',auth.isAuthenticated,upload.single('image'),controller.product.addPost);
    app.get('/category/add',auth.isInRole('Admin'),controller.category.addGet);
    app.post('/category/add',auth.isInRole('Admin'),controller.category.addPost);
    app.get('/category/:category/products',controller.category.productByCategory);
    app.get('/product/edit/:id',auth.isAuthenticated,controller.product.editGet);
    app.post('/product/edit/:id',auth.isAuthenticated,upload.single('image'),controller.product.editPost);
    app.get('/product/delete/:id',auth.isAuthenticated,controller.product.deleteGet);
    app.post('/product/delete/:id',auth.isAuthenticated,controller.product.deletePost);
    app.get('/product/buy/:id',auth.isAuthenticated,controller.product.buyGet);
    app.post('/product/buy/:id',auth.isAuthenticated,controller.product.buyPost);
    app.get('/user/register',controller.user.getUserRegister);
    app.post('/user/register',controller.user.postUserRegister);
    app.get('/user/login',controller.user.getLoginUser);
    app.post('/user/login',controller.user.postLoginUser);
    app.post('/user/logout',auth.isAuthenticated,controller.user.logout);

};