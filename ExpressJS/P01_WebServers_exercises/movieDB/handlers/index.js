const homeHandler = require('./home-handler.js');
const errorHandler = require('./error-handler.js');
const staticHandler = require('./static-handler.js');
const faviconhandler=require('./favicon-handler.js');
const addMoveHandler = require('./add-movie-handler.js');
const viewAllHandlers=require('./view-all-handlers.js');
const detailshandler=require('./details-handler.js');

module.exports=[staticHandler,homeHandler,faviconhandler,addMoveHandler,viewAllHandlers,detailshandler,errorHandler];