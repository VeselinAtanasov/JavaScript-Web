
module.exports = function (req, res) {
    if (req.path === '/about.html' && req.method === 'GET') {
        res.sendHtml('./views/about.html');
    } else {
        return true;
    }
};
