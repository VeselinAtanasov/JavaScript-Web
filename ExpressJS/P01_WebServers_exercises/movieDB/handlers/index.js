const homeHandler = require('./home-handler.js');
const errorHandler = require('./error-handler.js');
const staticHandler = require('./static-handler.js');
const faviconhandler=require('./favicon-handler.js');

module.exports=[staticHandler,homeHandler,faviconhandler,errorHandler];