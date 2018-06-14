const fs = require('fs');
const filePath = './views/home.html';



module.exports = (req, res) => {
    if (req.pathname.startsWith('/public/memeStorage/')) {
        fs.readFile('.'+req.pathname, (err, data) => {
            if(err){
                console.log(err);
                return;
            }
            let picName = req.pathname.split('/').pop();
            res.writeHead(200,{
                'Content-Type': 'image/jpeg',
                'Content-Disposition': `attachment; filename="${picName}"`
            });
            res.write(data);
            res.end();
        });
    }else{
        return true;
    }
};
