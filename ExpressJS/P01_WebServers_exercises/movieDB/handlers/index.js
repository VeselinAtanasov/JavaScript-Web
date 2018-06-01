const homeHandler = require('./home-handler.js');
const errorHandler = require('./error-handler.js');
const staticHandler = require('./static-handler.js');
const faviconhandler=require('./favicon-handler.js');
const addMovieHandler=require('./add-movie-handler.js');
const displayAllMovies = require('./view-all-movies-handler.js');
const detailsHandler = require('./details-handler.js');
const statusHandler = require('./status-handler.js');

module.exports=[homeHandler,staticHandler,faviconhandler,addMovieHandler,statusHandler,displayAllMovies,detailsHandler,errorHandler];