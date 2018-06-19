const api = require('../api/article-api');

module.exports = {
    articleCreateGet: async function (req, res) {
        let currentUser = {
            name: req.user.username
        };

        res.render('articles/create', { currentUser });

    },
    articleCreatePost: async function (req, res) {
        let createCurrentArticle = await api.createArticle(req.body);
        let createCurrentEdit = await api.createEdit(req, createCurrentArticle);
        let updatedArticle = await api.updateTheArticle(createCurrentEdit, createCurrentArticle._id);

        res.redirect('/');
    },
    getAllArticles: async function (req, res) {

        let allArticles = await api.getAllArticlesForDisplaying();
        let data = {
            allArticles: allArticles
        };
        if (req.user) {
            data.currentUser = {
                name: req.user.username
            };

        }
        res.render('articles/all-articles', data);

    },
    getArticle: async function (req, res) {
        let id = req.params.id;
        console.log(id);

        let currentArticle = await api.getArticalById(id);
        let lastEditId = currentArticle.edits[currentArticle.edits.length - 1];
        let getLatestArticalContent = await api.getLastEdit(lastEditId);

        let content = getLatestArticalContent.content;

        let data = {
            currentArticletitle: currentArticle.title,
            content: content,
            currentArticleId: currentArticle._id
        };


        if (req.user) {
            data.currentUser = {
                name: req.user.username
            };

        }
        res.render('articles/article', data);

    },
    getLatestArticle: async function (req, res) {
        let allArticles = await api.getAllArticles();
        let latestArticle = allArticles[0];

        let currentArticle = await api.getArticalById(latestArticle._id);
        let lastEditId = currentArticle.edits[currentArticle.edits.length - 1];
        let getLatestArticalContent = await api.getLastEdit(lastEditId);

        let content = getLatestArticalContent.content;

        let data = {
            currentArticletitle: currentArticle.title,
            content: content,
        };


        if (req.user) {
            data.currentUser = {
                name: req.user.username
            };

        }
        res.render('articles/article', data);
    },

    getEditArticle: async function (req, res) {
        let id = req.params.id;
        console.log(id);

        let currentArticle = await api.getArticalById(id);

        if (currentArticle.status) { // check if it is a admin ?
            res.render('/', { error: 'The Article is locked for editing' });
            return;
        }
        let lastEditId = currentArticle.edits[currentArticle.edits.length - 1];
        let getLatestArticalContent = await api.getLastEdit(lastEditId);

        let content = getLatestArticalContent.content;

        let data = {
            currentArticletitle: currentArticle.title,
            content: content,
            currentArticleId: currentArticle._id
        };
        if (req.user) {
            data.currentUser = {
                name: req.user.username
            };

        }

        res.render('articles/edit', data);
    },
    postEditArticle: async function (req, res) {
        let data = req.body;
        let id = req.params.id;
        console.log(id);
        console.log(data);

        let newEdit = await api.addEdit(req, id);
        let updatedArticle = api.updateTheArticle(newEdit, id);
        if (req.user) {
            data.currentUser = {
                name: req.user.username
            };

        }
        res.redirect('/');

    },
    getHistory: async function (req, res) {
        let id = req.params.id;
        let currentArticle = await api.getArticalById(id);
        let allEdits = await api.getAllEdits(currentArticle.edits);

        for (let edit of allEdits) {
            let e = await api.getCreator(edit.creator);

            let res = edit.creationDate.toString().split('GMT').shift().split(' ').filter(e => e !== '');
            res.shift();
            let hours = res.pop().substring(0, 5);
            let currentDate = hours + ', ' + res[1] + ' ' + res[0] + ' ' + res[2];
            edit.user = e.username;
            edit.currentDate = currentDate;

        }
        let currentUser = {
            name: req.user.username
        };
        res.render('articles/history', { currentArticle, allEdits, currentUser });


    },
    getSearch: async function (req, res) {

        // let currentUser = {
        //     name: req.user.username
        // };
        // res.render('articles/history', { currentArticle, allEdits, currentUser });
    },

    postSearch: async function (req, res) {
        let data = req.body;
        let searchedWord = data.word;

        let allArticles = await api.getAllArticles();
        let results = [];

        for (let article of allArticles) {
            if (article.title.includes(searchedWord)) {
                let obj = {
                    title: article.title,
                    id: article._id,
                };
                results.push(obj);
            }
        }


        res.render('articles/search-results', { results, searchedWord });

    },


};