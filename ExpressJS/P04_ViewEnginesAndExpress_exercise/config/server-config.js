const handlebars = require('express-handlebars');
const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');

module.exports = (app) => {
    app.engine('hbs',handlebars({
        extname : '.hbs',
        layoutsDir: 'views/layout',
        defaultLayout : 'main'
    }));
    app.set('view engine', 'hbs');

    //Define all middlewears:
    // --load all static files: 
    app.use('/static',express.static('static'));
    // -- body-parser:
    app.use(bodyParser.urlencoded({extended: true}));
};