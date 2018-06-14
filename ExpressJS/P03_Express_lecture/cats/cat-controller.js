const express = require('express');
const router = express.Router();

router.get('/create',(req,res) => {
    res.send('Create cat...');
});

router.get('/details/:id',(req,res) =>{
    console.log(req.params);
    res.send('Cat details');
    // res.redirect('/create');
    // res.sendFile('/index.js');
    // res.download(__dirname+'/index.js');
});

module.exports = router;