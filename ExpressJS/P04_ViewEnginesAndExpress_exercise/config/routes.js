const homeController = require('../controllers/home-controller.js');
const bookController = require('../controllers/book-controller.js');

module.exports = (app) => {
    app.get('/', homeController.displayHome);
    // app.use('/',bookController); -> in case we want to work with routers...
    app.get('/addBook', bookController.getAddBook);
    app.post('/addBook', displayNotification, bookController.postAddBook);
    app.get('/viewAllbooks', bookController.getAll);
    app.get('/details/:id', bookController.getDetails);
};

function displayNotification(req, res, next) {
    console.log('Displayed notification....')
    next();
}