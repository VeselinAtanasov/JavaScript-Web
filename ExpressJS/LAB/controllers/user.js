const User = require('../models/User.js');
const encryption = require('../utilities/encryption.js');

module.exports.getUserRegister = function (req, res) {
    res.render('user/register');
};

module.exports.postUserRegister = function (req, res) {
    let user = req.body;
    console.log(user);
    if (user.password && user.password !== user.confirmedPassword) {
        user.error = "Passwords do not match.";
        return;
    }
    let salt = encryption.generateSalt();
    user.salt = salt;
    if (user.password) {
        let hashedPassword = encryption.generateHashedPassword(salt, user.password);
        user.password = hashedPassword;
    }
    console.log(user);

    User.create(user)
        .then(user => {
            req.logIn(user, (error, user) => {
                if (error) {
                    res.render('user/register', { error: "Authentication failed!" });
                    return;
                }
                res.redirect('/');

            });
        })
        .catch(err => {
            user.error = err;
            res.render('user/register', user);
        });
};

module.exports.getLoginUser = function (req, res) {
    res.render('user/login');
};
module.exports.postLoginUser = function (req, res) {
    let userToLogin = req.body;
    //   console.log(userToLogin);

    User.findOne({ username: userToLogin.username })
        .then(user => {
            //  console.log(user);
            if (!user || !user.authenticate(userToLogin.password)) {
                res.render('user/login', {
                    error: "Invalid credentials"
                });
                return;
            }
            req.logIn(user,(err,user)=>{
                if(err){
                    res.render('user/login', {
                        error: "Authentication failed"
                    });
                    return; 
                }
                res.redirect('/');
            });

        });
};

module.exports.logout=function(req,res){
    req.logout();
    res.redirect('/')
}