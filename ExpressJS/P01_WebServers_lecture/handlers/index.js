const staticHandler = require('./static-handler.js');
const homeHandler = require('./home-handler.js');
const aboutHandler = require('./about-handler.js');
const errorHandler = require('./error-handler.js');
const bigfileHandler=require('./bigFileHandler.js');
const dataHandler = require('./dataHandler.js')

module.exports= [staticHandler,homeHandler,aboutHandler,bigfileHandler,dataHandler,errorHandler];