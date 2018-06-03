
const fs = require('fs');
const Image = require('mongoose').model('Image');
const Tag = require('mongoose').model('Tag');

module.exports = (req, res) => {
    if (req.pathname === '/search') {

        fs.readFile('./views/results.html', 'utf8', function (err, data) {
            if (err) {
                console.log(err);
                return;
            }
            function getImagesFromDb(params) {
                let args = {}
                if (params.afterDate && params.beforeDate) {
                    if (params.tags) {
                        args={tags: { $in: params.tags }};
                    }
                } else {
                    if (params.tags) {
                        args={tags: { $in: params.tags }};
                    }
                }


                Image.find(args)
                    .where('creationDate').lt(params.beforeDate).gt(params.afterDate)
                    .sort('-creationDate')
                    .limit(params.Limit)
                    .then(images => {
                        let imageHtml = '';
                        for (let image of images) {
                            imageHtml += `<fieldset id="${image.id}" >
                <img src="${image.url}"></img>
                <p>${image.description}<p/>
                <button onclick='location.href="/delete?id=${image.id}"'class='deleteBtn'>Delete
                </button> 
                </fieldset>` ;
                        }
                        data = data.toString().replace('<div class="replaceMe"></div>', imageHtml);
                        res.writeHead(200, {
                            'content-type': 'text/html'
                        });
                        res.write(data);
                        res.end();
                    }).catch(err => {
                        res.writeHead(500, {
                            'content-type': 'text/html'
                        });
                        res.write('<h1>DB Error!!!<h2>');
                        res.end();
                        return;
                    });
            }

            const params = {};
            params.beforeDate = (params.beforeDate === '' || params.beforeDate===undefined) ? Date.now() : params.beforeDate;
            params.afterDate = (params.afterDate === '' ||params.afterDate === undefined) ? new Date(-8640000000000000) : params.afterDate;


            if (req.pathquery.Limit && req.pathquery.Limit !== '') {
                params.Limit = Number(req.pathquery.Limit);
            } else {
                params.Limit = 10;
            }

            if (req.pathquery.tagName) {
                let tags = req.pathquery.tagName.split(',').filter(e => e.length > 0);

                if (tags.length > 0) {
                    Tag.find({ name: { $in: tags } }).then(data => {
                        let tagIds = data.map(m => m.id);
                        params.tags = tagIds;
                        getImagesFromDb(params);
                    });
                }
            } else {
                getImagesFromDb(params);
            }
        });
    } else {
        return true;
    }
};


