declare var require: any; // very important To be able to use require in the code...
require('isomorphic-fetch'); // or another library of choice.
const Dropbox = require('dropbox').Dropbox;
const dbx = new Dropbox({ accessToken: 'bcGGNB1ly_AAAAAAAAAALBb0qN4XJ-ccCbj_AkmRqNihqBytE-XQF0Q2GmweYFzA' });


export const DropBoxConnector = {

    createFolder: function (username: string) {
        return dbx.filesCreateFolder({ path: '/' + username, autorename: true })
    },
    filesUpload: function (username: string, fileName: string, file: File) {
        return dbx.filesUpload({
            path: '/' + username + '/' + fileName,   //file.name,
            contents: file,
            autorename: false,
            mode: 'add'
        })
    },
    filesListFolder: function (username: string) {
        return dbx.filesListFolder({ path: '/'+username+'/' })
    },
    filesGetThumbnail: function(path : string){
        return dbx.filesGetThumbnail({ path: path, format: "jpeg" })
    }

}


