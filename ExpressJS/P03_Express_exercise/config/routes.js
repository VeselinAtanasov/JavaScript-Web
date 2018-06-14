const homeController = require('../controllers/home-controller.js');
const genreController = require('../controllers/genre-controller.js');
const memeController = require('../controllers/meme-controller.js');


module.exports = (app) => {
    app.get('/', homeController.displayHome);
    app.get('/addGenre',genreController.getGenre);
    app.post('/addGenre',genreController.postGenre);
    app.use('/memes',memeController);


    // // app.use('/',bookController); -> in case we want to work with routers...
    // app.get('/addBook', bookController.getAddBook);
    // app.post('/addBook', displayNotification, bookController.postAddBook);
    // app.get('/viewAllbooks', bookController.getAll);
    // app.get('/details/:id', bookController.getDetails);
};

