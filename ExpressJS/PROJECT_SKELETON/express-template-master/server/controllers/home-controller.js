module.exports = {
    index: (req, res) => {
        res.render('home/index');
    },
    about: (req, res) => {    //About page could missing  - so could be removed
        res.render('home/about');
    }
};
