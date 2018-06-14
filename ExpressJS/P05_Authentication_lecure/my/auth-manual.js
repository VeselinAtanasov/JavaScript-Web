const router = require('express').Router();
const encription = require('./crypto.js');

const users = [];

router
    .get('/login', (req, res) => {
        let message = req.session.message;
        req.session.message = '';
        res.render('login', {
            message,
            inputData: req.session.inputData,
            password: req.session.password
        });
    })
    .post('/login', (req, res) => {
        let { username, password } = req.body;
        const user = users.filter(u => u.username === username)[0];
        if (user !== undefined) {
            let hashedPass = encription.generateHashedPassword(user.salt, password);
            if (username === user.username && user.hashedPass === hashedPass) {
                req.session.user = {
                    username,
                };
                req.session.message = 'Login Successful';
                res.redirect('/');
                delete req.session.inputData;
                return;
            }
        }
        req.session.message = 'Incorrect username or password';
        req.inputData = {
            username: username,
            password: password
        };
        res.redirect('/auth/login');
    })
    .get('/register', (req, res) => {
        let message = req.session.message;
        req.session.message = '';
        res.render('register', {
            message,
            inputData: req.session.inputData,
            password: req.session.password
        });
    })
    .post('/register', (req, res) => {
        const {
            username,
            password,
            repeat
        } = req.body;
        if (password !== repeat) {
            return errorDuringRegistration("Password do not match!");
        }
        if (users.filter(u => u.username === username).length > 0) {
            return errorDuringRegistration('User already exists');
        }

        let salt = encription.generateSalt();
        let hashedPass = encription.generateHashedPassword(salt, password);
        const user = {
            username,
            hashedPass,
            salt
        };

        req.session.user = {
            username
        };
        users.push(user);

        req.session.message = "Registration successful!";
        return res.redirect('/');

        function errorDuringRegistration(message) {
            req.session.inputData = {
                username,
                password,
                repeat
            };
            req.session.message = message;
            res.redirect('/auth/register');
            return;
        }
    });

module.exports = router;

