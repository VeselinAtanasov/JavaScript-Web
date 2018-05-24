const messages = [
    'Hello',
    'How Are you',
    'My Friend!'
];

function dataHandler(req, res) {
    if (req.path.startsWith('/data/')) {
        let target = req.path.substring(6);

        if ('messages') {
            res.writeHead(200, {
                'content-type': 'application/json'
            });
            res.write(JSON.stringify(messages));
            res.end();
        } else {
            return true;
        }
    } else {
        return true;
    }
}

module.exports = dataHandler;