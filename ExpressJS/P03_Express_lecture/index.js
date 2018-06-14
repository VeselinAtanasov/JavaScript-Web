const express = require('express');
let bodyParser = require('body-parser'); // parser whci helps a lot in parsing html forms..
const app = express();
const port = 1337;

const cats = require('./cats/cat-controller.js');

//return all static files;
app.use(express.static('content'));
app.use(bodyParser.urlencoded({ extended: true })); // this is a middleware => will be executed every time befor checking the callback...

let middlewareFunc = function (req, res, next) {
    //do sometnigh - e.g. check if user isAuthenticated..
    console.log('Authentication passed...');
    next();
};

app.get('/', middlewareFunc, function (req, res) {
    res.redirect('/about');
});
app.post('/save-form', (req, res) => {
    console.log(req.body);
    console.log(req.body.firstName);
    console.log(req.body.age);
    res.redirect('/');
});

app.get('/about', function (req, res) {
    res.send('About...');
});


app.use('/cats', cats);

app.listen(port, () => console.log(`Express running on port ${port}...`));
