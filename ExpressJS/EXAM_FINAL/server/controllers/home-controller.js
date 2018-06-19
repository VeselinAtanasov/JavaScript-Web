const User = require('../data/User');
const api = require('../api/article-api.js');

module.exports = {
    index: async (req, res) => {

        let allArticles = await api.getAllArticles();
        let latestArticle = allArticles[0];
        if (allArticles.length > 3) {
            allArticles.shift();
        }

        let lastEditId = latestArticle.edits[latestArticle.edits.length-1];
        let getLatestArticalContent = await api.getLastEdit(lastEditId);
        let lastContent = getLatestArticalContent.content.split(' ').slice(0,50).join(' ');
        let data = {
            allArticles: allArticles,
            latestArticle: latestArticle,
            lastContent :lastContent,
            id : latestArticle._id
        };

        if (req.user) {
            data.currentUser = {
                name: req.user.username
            };

        }
        res.render('home/index', data);
    }
};
