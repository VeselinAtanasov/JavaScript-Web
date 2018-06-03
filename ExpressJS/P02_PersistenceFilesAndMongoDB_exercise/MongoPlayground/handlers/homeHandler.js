let Tag = require('../models/TagSchema');
let Image = require('../models/ImageSchema');
const fs = require('fs');

module.exports = (req, res) => {
    if (req.pathname === '/' && req.method === 'GET') {
        fs.readFile('./views/index.html', (err, data) => {
            if (err) {
                console.log(err);
                return;
            }
            res.writeHead(200, {
                'Content-Type': 'text/html'
            });
            let dispalyTags = '';

            Tag.find({}).then(tags => {
                for (let tag of tags) {
                    //console.log(tag.id)
                    dispalyTags += `<div class='tag' id="${tag.id}">${tag.name}</div>`;
                }
                data = data
                    .toString()
                    .replace(`<div class='replaceMe'></div>`, dispalyTags);
                res.end(data);
            });
        });
    } else {
        return true;
    }
};
