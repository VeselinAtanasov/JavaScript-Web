const fs = require('fs');
const formidable = require('formidable');
const db = require('../config/dataBase.js');

module.exports = (req, res) => {
    if (req.pathname === '/viewAllMemes' && req.method === 'GET') {
        viewAll(req, res);
    } else if (req.pathname === '/addMeme' && req.method === 'GET') {
        viewAddMeme(req, res);
    } else if (req.pathname === '/addMeme' && req.method === 'POST') {
        addMeme(req, res);
    } else if (req.pathname.startsWith('/getDetails') && req.method === 'GET') {
        getDetails(req, res);
    } else {
        return true;
    }
};

function viewAll(req, res) { 
    console.log('viewing....');
    fs.readFile('./views/viewAll.html', 'utf8', (err, data) => {
        if(err){
            console.log(err);
            return;
        }
        res.writeHead(200,{
            'content-type':'text/html'    
        });

        let pics = db.getDb();
        let html ='';
        for(let meme of pics){
            html+=`<div class="meme">
          <a href="/getDetails?id=${meme.id}">
          <img class="memePoster" src="${meme.memeSrc}"/>          
 </div>`;
        }

        data = data.toString().replace('<div id="replaceMe">{{replaceMe}}</div>',html);

        res.write(data);
        res.end();

    });
}

function  getDetails(req, res) { 
    let id = req.url.split('id=').pop();
    let allMemes = db.getDb();
    let meme;
    for(let m of allMemes){
        if(m.id===id){
            meme=m;
            break;
        }
    }
    if(!meme){
        console.log('Meme dos not exist in the db...');
        return;
    }

    fs.readFile('./views/details.html', 'utf8', (err, data) => {
        if(err){
            console.log(err);
            return;
        }
        res.writeHead(200,{
            'content-type':'text/html'    
        });
        let html =`<div class="content">
        <img src="${meme.memeSrc}" alt=""/>
        <h3>Title  ${meme.title}</h3>
        <p> ${meme.description}</p>
        <button><a href="${meme.memeSrc}">Download Meme</a></button>
        </div>`;
    

        data = data.toString().replace('<div id="replaceMe">{{replaceMe}}</div>',html);

        res.write(data);
        res.end();

    });


}

function viewAddMeme(req, res) {

    fs.readFile('./views/addMeme.html', 'utf8', (err, data) => {
        if(err){
            console.log(err);
            return;
        }
        res.writeHead(200,{
            'content-type':'text/html'    
        });
        res.write(data);
        res.end();

    });
}

function addMeme(req, res) {
 
    let form =new formidable.IncomingForm();
    form.parse(req,(err,fields,files) => {
        let tempPath = files.meme.path;
        console.log(`temp path file location =${tempPath}`);
        let fileName = createFileName() +'.jpg';

        //get path:
        fs.readdir('./public/memeStorage', 'utf8', (err, data) => {
            if (err) {
                console.log(err);
                return;
            }
            let allFiles = data.map(Number).sort((a,b) => a-b);

            let workingDir= allFiles.pop();
            let pathToWorrkingDir='./public/memeStorage'+`/${workingDir}`;
            fs.readdir(pathToWorrkingDir, 'utf8', (err, data2) => {
                if (err) {
                    console.log(err);
                    return;
                }
                let allPicsInDir = data2.length;
                if(allPicsInDir<3){
                    let memeStorage='./public/memeStorage'+`/${workingDir}/`+fileName;
                    let currentMeme={
                        id: createFileName()+'id',
                        title: fields.memeTitle ? fields.memeTitle :'',
                        memeSrc: memeStorage,
                        description: fields.memeDescription ? fields.memeDescription : '',
                        privacy: fields.status,
                        dateStamp: Date.now()
                    };

                    addInDB(currentMeme,tempPath,memeStorage,res)
                }else{
                    //create new directory and save the picture there :
                    let pathTOSave='./public/memeStorage'+`/${Number(workingDir)+1}`;
                    fs.mkdir(pathTOSave, err => {
                        if (err) {
                            console.log(err);
                            return;
                        }
                        let memeStorage='./public/memeStorage'+`/${Number(workingDir)+1}/`+fileName;
                        let currentMeme={
                            id: createFileName()+'id',
                            title: fields.memeTitle ? fields.memeTitle :'',
                            memeSrc: memeStorage,
                            description: fields.memeDescription ? fields.memeDescription : '',
                            privacy: fields.status,
                            dateStamp: Date.now()
                        };

                        addInDB(currentMeme,tempPath,memeStorage,res);
                    });
                }
            });
        });

    
    });
}

function  addInDB(currentMeme,tempPath,memeStorage,res){
    db.add(currentMeme);
    db.save()
        .then( db.load().then(
            fs.rename(tempPath,memeStorage, err =>{
                if(err){
                    console.log(err);
                }
                res.writeHead(302,{
                    'Location':'/viewAllMemes'
                });
                res.end();
            })
        )
            .catch(err => console.log(err)))
        .catch(err => console.log(err));
}



function createFileName() {
    let text = "";
    let possible = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";

    for (let i = 0; i < 5; i++)
        text += possible.charAt(Math.floor(Math.random() * possible.length));

    return text;
}