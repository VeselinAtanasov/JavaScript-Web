const fs = require('fs');

module.exports=function(req,res){
    fs.readFile('./views/error.html', 'utf8', (err, data) => {
        res.writeHead(404, {
            'content-type': 'text/html'
        });
        res.write(data);
        res.end();
    });
};