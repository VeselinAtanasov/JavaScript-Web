
module.exports =function(req,res){
    if ((req.path === '/' || req.path === '/index.html') && req.method === 'GET') {
        res.sendHtml('./views/index.html');
    }else{
        return true;
    } 
};

