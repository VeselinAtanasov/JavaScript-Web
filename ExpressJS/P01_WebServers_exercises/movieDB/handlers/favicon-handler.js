const fs = require('fs');
const faviconIco = '/public/images/favicon.ico';

module.exports = function (request, response) {

    if (request.path === faviconIco) {
        fs.readFile('..' + faviconIco, function (err, data) {
            if (err) {
                console.log(err);
                return;
            }
            response.writeHead(200, {
                'content-type': 'image/x-icon'
            });
            response.write(data);
            response.end();
        });
    }else{
        return true;
    }
}