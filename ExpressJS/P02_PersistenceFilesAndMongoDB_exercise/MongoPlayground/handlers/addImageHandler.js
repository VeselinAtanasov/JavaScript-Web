const formidable = require('formidable');
const util = require('util');
const Image = require('mongoose').model('Image'); // another way to require the schema...
const mongoose = require('mongoose');

module.exports = (req, res) => {
    if (req.pathname === '/addImage' && req.method === 'POST') {
        addImage(req, res);
    } else if (req.pathname === '/delete' && req.method === 'GET') {
        deleteImg(req, res);
    } else {
        return true;
    }
};

function addImage(req, resp) {
    let form = new formidable.IncomingForm();
    form.parse(req, (err, fileds, files) => {
        if (err) {
            resp.writeHead(500, {
                'content-type': 'text/html'
            });
            resp.write('<h1>500 Server Error!!!<h2>');
            resp.end();
            return;
        }

        let allTags = Array.from(new Set(fileds.tagsID.split(',')))
            .filter(e => e !== "")
            .map(e => mongoose.Types.ObjectId(e));


        const image = new Image({
            url: fileds.imageUrl,
            description: fileds.description,
            tags: allTags
        });
        image.save().then((image) => {
            resp.writeHead(302, {
                'Location': '/'
            });
            resp.end();
        }).catch(err => {
            resp.writeHead(500, {
                'content-type': 'text/html'
            });
            resp.write('<h1>500 Server Error!!!<h2>');
            resp.end();
            return;
        });
    });
}

function deleteImg(req, resp) {
    let id = req.pathquery.id;
    Image.findByIdAndRemove({ _id: id }).then(data => {
        console.log(data);
        resp.writeHead(302,{
            'Location':'/'
        });
        resp.end();

    }).catch(err => {
        resp.writeHead(500, {
            'content-type': 'text/html'
        });
        resp.write('<h1>Unsuccessful Delete DB Operation<h2>');
        resp.end();
        return;
    });


}
