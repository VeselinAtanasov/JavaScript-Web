const staticHandler = require('./static-handler.js');
const homeHandler = require('./home-handler.js');
const aboutHandler = require('./about-handler.js');
const errorHandler = require('./error-handler.js');

module.exports= [staticHandler,homeHandler,aboutHandler,errorHandler];