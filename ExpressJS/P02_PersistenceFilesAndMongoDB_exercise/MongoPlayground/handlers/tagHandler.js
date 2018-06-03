const formidable = require('formidable');
const util = require('util');
const Tag = require('mongoose').model('Tag'); // another way to require the schema...

module.exports = (req, res) => {
    if (req.pathname === '/generateTag' && req.method === 'POST') {
        const form = new formidable.IncomingForm();

        form.parse(req, function (err, fields, files) {
            if (err) {
                res.writeHead(500,{
                    'content-type': 'text/html'
                });
                res.write('<h1>500 Server Error!!!<h2>');
                res.end();
                return;
            }
            let tag = new Tag({
                name: fields.tagName,
                creationDate: Date.now(),
                images: []
            });
            tag.save().then(tag => {
                res.writeHead(302, {
                    'Location': '/'
                });
                res.end();
            }).catch(err => {
                res.writeHead(500,{
                    'content-type': 'text/html'
                });
                res.write('<h1>500 Server Error!!!<h2>');
                res.end();
            });

        });
    } else {
        return true;
    }
};
