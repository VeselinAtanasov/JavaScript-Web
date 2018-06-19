const Article = require('../data/Article.js');
const Edit = require('../data/Edit.js');
const User = require('../data/User');


async function createEdit(request, createCurrentArticle) {
    let edit = {
        creator: request.user,
        content: request.body.currentEdit,
        article: createCurrentArticle._id

    };
    return await Edit.create(edit);

}

async function createArticle(data) {
    return await Article.create({ title: data.title });
}

async function updateTheArticle(createCurrentEdit, articleId) {
    return await Article.findById(articleId).then(article => {
        article.edits.push(createCurrentEdit._id);
        article.save();
    });
}

async function getAllArticles() {
    return await Article.find({})
        .sort('-creationDate')
        .limit(4);
}

async function getAllArticlesForDisplaying() {
    return await Article.find({})
        .sort('title');
}

async function getLastEdit(id){
    return await Edit.findById(id);
}
async function getArticalById(id){
    return await Article.findById(id);
}

async function addEdit(request,articleId){
    let edit = {
        creator: request.user,
        content: request.body.currentContent,
        article: articleId

    };
    return await Edit.create(edit);
}

async function getAllEdits(editsArr){
    return await Edit.find({_id : editsArr}).sort('-creationDate').populate('user');
}

async function getCreator(userId){
    return await User.findById(userId);
}

module.exports = {
    createArticle,
    createEdit,
    updateTheArticle,
    getAllArticles,
    getLastEdit,
    getAllArticlesForDisplaying,
    getArticalById,
    addEdit,
    getAllEdits ,
    getCreator
};