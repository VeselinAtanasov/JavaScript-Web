const controllers = require('../controllers');
const auth = require('./auth');

module.exports = (app) => {
    app.get('/', controllers.home.index);
    app.get('/index.html', controllers.home.index);

    app.get('/users/register', controllers.users.registerGet);
    app.post('/users/register', controllers.users.registerPost);
    app.get('/users/login', controllers.users.loginGet);
    app.post('/users/login', controllers.users.loginPost);
    app.post('/users/logout', controllers.users.logout);

    app.get('/article/create', auth.isAuthenticated,controllers.articles.articleCreateGet);
    app.post('/article/create',auth.isAuthenticated,controllers.articles.articleCreatePost);
    app.get('/article/all',controllers.articles.getAllArticles);
    app.get('/article/details/:id',controllers.articles.getArticle);
    app.get('/article/lastArticle',controllers.articles.getLatestArticle);

    app.get('/edit/details/:id',controllers.articles.getArticle);
    app.get('/article/lastArticle',controllers.articles.getLatestArticle);

    app.get('/article/edit/:id',auth.isAuthenticated,controllers.articles.getEditArticle);
    app.post('/article/edit/:id',auth.isAuthenticated,controllers.articles.postEditArticle);

    app.get('/article/history/:id',auth.isAuthenticated,controllers.articles.getHistory);

    app.get('/search',controllers.articles.getSearch);
    app.post('/search',controllers.articles.postSearch);

    app.all('*', (req, res) => {
        res.status(404);
        res.send('404 Not Found!');
        res.end();
    });
};
