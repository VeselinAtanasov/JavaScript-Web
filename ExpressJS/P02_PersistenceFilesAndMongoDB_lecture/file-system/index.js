/*
Crate web server for uploading files...
*/

const fs = require('fs');
const http = require('http');
const formidable = require('formidable');
const path = require('path');
const port = 4400;

http.createServer(function (req, res) {
    let filePath = path.normalize(path.join(__dirname, './file-system/views/index.html'));
    if (req.method === 'GET') {
        fs.readFile('./file-system/views/index.html', 'utf8', (err, data) => {
            if (err) {
                console.log(err);
                return;
            }
            res.writeHead(200, {
                'content-type': 'text/html'
            });
            res.write(data);
            res.end();
        });
    } else {
        let form = new formidable.IncomingForm();
        form.parse(req, function(err, fields, files){
            if(err){
                console.log(err);
                return;
            }
            let file = files.upload;
            let tempPath = file.path;
            let fileName = file.name;
            fs.rename(tempPath,'./file-system/'+fileName, err =>{
                if(err){
                    console.log(err);
                }
                res.write('File Uploaded!!!');
                res.end();
            });
        });
    }

}).listen(port);

console.log(`Server is listening on port: ${port}...`);

