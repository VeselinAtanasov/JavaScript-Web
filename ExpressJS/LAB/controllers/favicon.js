const fs = require('fs');
let fvicoIcon = '/favicon.ico';

module.exports = function (request, response) {
    if (request.pathname === fvicoIcon && request.method === 'GET') {
        fs.readFile('./content/images' + fvicoIcon, function (err, data) {
            if (err) {
                console(err);
                return;
            }

            response.writeHead(200,{
                'content-type':'image/x-icon'
            });
            response.write(data);
            response.end();
        });
    }else{
        return true;
    }
};