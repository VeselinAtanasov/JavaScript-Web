const app = require('express')();
const cookieParser = require('cookie-parser');
const session = require('express-session');
const handlebars = require('express-handlebars');
const bodyParser = require('body-parser');
const passport = require('passport');
const authRouter = require('./auth.js');

const products = [
    {
        name: 'Apple',
        cost: 10
    },
    {
        name: 'Banana',
        cost: 12
    },
    {
        name: 'Orange',
        cost: 10
    }

]

app.engine('.hbs', handlebars({
    extname: '.hbs'
}));
app.set('view engine', '.hbs');


//cookie and session middleware:
app.use(cookieParser());
app.use(session({ secret: 'Some random Secreat Message!...' }));
app.use(bodyParser.urlencoded({ extended: true }));
app.use(passport.initialize())
app.use(passport.session())



//set middleware which creates propery cart...
app.use('/auth', authRouter);
app.use(setSession);

function isAuthenticated(req,res,next){
    if(req.user===undefined){
        res.redirect('/auth/login');
        return;
    }
    next();
}
/*
app.use((req, res, next) => {
    if (req.session.user === undefined) {
        return res.redirect('/auth/login');
    }
    next();
}); */

app.get('/',isAuthenticated, (req, res) => {

    let numItems = (req.session.cart || []).length;
    let message = req.session.message;
    console.log(req.user);
    let username = (req.user|| {username:'annonymous'}).username; // pasport attaches object user to the req
    req.session.message = ''; //important to set as empty string, in order to avoid in case of refresh the message to be visible..
    res.render('index', { products, numItems, message,username });
});

app.get('/add/:id',isAuthenticated, (req, res) => {
    const product = products[Number(req.params.id)];
    req.session.cart.push(product);
    req.session.message = `Successfully added ${product.name}`;
    res.redirect('/');
});

app.get('/cart',isAuthenticated, (req, res) => {
    const items = req.session.cart;
    const numItems = items.length;
    const total = items.reduce((p, c, i, a) => p + c.cost, 0);
    res.render('cart', { items, numItems, total });
});
app.get('/remove/:id',isAuthenticated, (req, res) => {
    let index = Number(req.params.id);
    let items = req.session.cart;
    req.session.cart = items.filter((e, i) => i !== index);

    res.redirect('/cart');

});




function setSession(req, res, next) {
    console.log('Setting the session if not exists...');
    if (req.session.cart === undefined) {
        req.session.cart = [];
    }
    next();
}


// How to use cookies and session.....
// app.get('/setCookie', (req, res) => {
//     res.cookie('Message', 'Hi there');
//     res.end();
// });

// app.get('/readCookie', (req, res) => {
//     res.json(req.cookies);
//     res.end();
// });

// app.get('/setSession', (req, res) => {
//     req.session.message = 'hello'; // set some message in session object; This data stays in the server...The client has only the secret data( 'Some random Secreat Message!...')
//     res.end('Session set');
// });

app.get('/readSession', (req, res) => {
    res.json(req.session);
    res.end();
});


app.listen(5000, () => console.log('App is listening on port 5000'));

