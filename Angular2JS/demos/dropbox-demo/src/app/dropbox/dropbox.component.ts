import { Component, OnInit } from '@angular/core';
declare var require: any // very important To be able to use require in the code...
require('isomorphic-fetch'); // or another library of choice.
const Dropbox = require('dropbox').Dropbox;
const dbx = new Dropbox({ accessToken: 'bcGGNB1ly_AAAAAAAAAALBb0qN4XJ-ccCbj_AkmRqNihqBytE-XQF0Q2GmweYFzA' });

@Component({
  selector: 'app-dropbox',
  templateUrl: './dropbox.component.html',
  styleUrls: ['./dropbox.component.css']
})
export class DropboxComponent implements OnInit {
  public name2: string;
  public file2;
  public myFile: any;
  constructor() { }

  ngOnInit() {
  }

  fileChanged(event) {
    this.myFile = event.target.files[0];
    console.log(this.myFile)
  }

  handleSubmit(data) {
    console.log(data.value)
    // console.log(fileInput);
    let file = this.myFile;
    let fileName = Math.random().toString(36).substring(2, 15) + Math.random().toString(36).substring(2, 15) + '.jpg';

    dbx.filesUpload({
      path: '/toma/' + fileName,   //file.name,
      contents: file,
      autorename: false,
      mode: 'add'
    })
      .then((response) => {
        console.log('Here is the response of successful creation')
        console.dir(response)
        console.log('I will try to get the file:')
        

        dbx.filesCreateFolder({ path: '/toma', autorename: true }).then(res => {
          console.log(res)
          dbx.filesListFolder({ path: '/toma/' })
            .then((response) => {
              console.dir(response);
              let promises = [];
              for (let record of response.entries) {
                promises.push(dbx.filesGetThumbnail({ path: record.path_display, format: "jpeg" }));
              }
              Promise.all(promises).then((values) => {
                console.log('All promises ws resolved')
                console.dir(values);
                let arr = []
                for (let currentUrl of values) {
                  let url = window.URL.createObjectURL(currentUrl.fileBlob);
                  arr.push(url)
                }

                console.log(arr)
              });
            })
            .catch(function (error) {
              console.log(error);
            });
        }).catch(err => console.log(err))


      })
      .catch(function (error) {
        console.error(error);
      });
  }

}
