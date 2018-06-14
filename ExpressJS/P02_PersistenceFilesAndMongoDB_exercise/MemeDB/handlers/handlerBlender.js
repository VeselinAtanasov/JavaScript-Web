const homeHandler = require('./homeHandler');
const memeHandler = require('./memeHandler');
const staticHandler = require('./staticHandler');
const downloader = require('./download-handler');

module.exports = [homeHandler, memeHandler, downloader,staticHandler];
