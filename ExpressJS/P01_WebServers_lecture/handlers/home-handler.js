
module.exports =function(req,res){
    if (req.path === '/' || req.path === '/index.html') {
        res.sendHtml('./views/index.html');
    }else{
        return true;
    } 
};

