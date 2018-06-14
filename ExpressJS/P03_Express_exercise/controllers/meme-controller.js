const router = require('express').Router();
const Meme = require('../models/Meme.js');
const Genre = require('../models/Genre.js');
const shortid = require('shortid');

function getAddMeme(req, res) {
    Genre.find({})
        .sort('-title')
        .then(genres => {
            res.render('memes/addMeme', { genres });
        })
        .catch(err => console.log(err));
}

function postAddMeme(req, res) {
    let fileName = shortid.generate() + '.jpg';
    let fields = req.body;
    let files = req.files.meme;

    files.mv('./public/memeStorage/' + fileName, err => {
        if (err) {
            console.log(err);
            return;
        }
        let meme = {
            title: fields.memeTitle,
            memeSrc: `../public/memeStorage/` + fileName,
            description: fields.memeDescription,
            privacy: fields.status,
            genreId: fields.genreSelect
        };

        Meme.create(meme)
            .then(meme => {
                Genre.findById({ _id: fields.genreSelect })
                    .then(genre => {
                        genre.memes.push(meme._id);
                        genre
                            .save()
                            .then(data => {
                                Meme.find({})
                                    .then(allMemes => {
                                        res.render('memes/viewAll', { allMemes });
                                    })
                                    .catch(err => console.log(err));
                            })
                            .catch(err => console.log(err));

                    })
                    .catch(err => console.log(err));
            })
            .catch(err => console.log(err));

    });



}

function viewAll(req, res) {
    Meme.find({})
        .then(allMemes => {
            console.log(allMemes);
            res.render('memes/viewAll', { allMemes });
        })
        .catch(err => console.log(err));
}
function getDetails(req, res) {

    let id = req.params.id;
    Meme.findById({ _id: id })
        .then(meme => {
            let nameArr = meme.memeSrc.split('/')
            meme.name = nameArr[nameArr.length - 1];
            meme.memeSrc = meme.memeSrc.substring(2)
            res.render('memes/details', meme)
        })
        .catch(err => console.log(err));
}

function deleteMeme(req, res) {
    let id = req.params.id;
    Meme.findById({ _id: id })
        .then(meme => {
            meme.remove(meme);
            res.redirect('/memes/viewAllMemes');
        })
        .catch(err => console.log(err));
}

function getsearchMeme(req, res) {
    Genre.find({})
        .sort('-title')
        .then(genres => {
            res.render('memes/searchMeme', { genres })
        })
        .catch(err => console.log(err));
}

function postSearchMeme(req, res) {
    let params = req.body;
    Genre.findById({ _id: params.genreSelect })
        .then(genre => {
            console.log("It was not specify in the task description what shoould I do here  - which view to render.");
            console.log("Here I should display the coresponding memes...?");
            res.end()
        })
}

router
    .get('/addMeme', (req, res) => getAddMeme(req, res))
    .post('/addMeme', (req, res) => postAddMeme(req, res))
    .get('/viewAllMemes', (req, res) => viewAll(req, res))
    .get('/getDetails/:id', (req, res) => getDetails(req, res))
    .get('/delete/:id', (req, res) => deleteMeme(req, res))
    .get('/searchMeme', (req, res) => getsearchMeme(req, res))
    .post('/searchMeme', (req, res) => postSearchMeme(req, res))

module.exports = router;