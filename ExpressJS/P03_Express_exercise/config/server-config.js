const handlebars = require('express-handlebars');
const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');
const fileUploader=require('express-fileupload');

module.exports = (app) => {
    app.engine('hbs',handlebars({
        extname : '.hbs',
        layoutsDir: 'views/layout',
        defaultLayout : 'main'
    }));
    app.set('view engine', 'hbs');

    //Define all middlewears:
    // --load all static files: 
    app.use('/public',express.static('public'));
    // -- body-parser:
    app.use(bodyParser.urlencoded({extended: true}));
    // --file uploader:
    app.use(fileUploader());
};