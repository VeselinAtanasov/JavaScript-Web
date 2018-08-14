
import { Component, OnInit } from '@angular/core';
declare var require: any // very important To be able to use require in the code...
require('isomorphic-fetch'); // or another library of choice.
const Dropbox = require('dropbox').Dropbox;
const dbx = new Dropbox({ accessToken: 'bcGGNB1ly_AAAAAAAAAALBb0qN4XJ-ccCbj_AkmRqNihqBytE-XQF0Q2GmweYFzA' });
import {
  DomSanitizer,
  SafeHtml,
  SafeUrl,
  SafeStyle
} from '@angular/platform-browser';


@Component({
  selector: 'app-demo-dropbox-final',
  templateUrl: './demo-dropbox-final.component.html',
  styleUrls: ['./demo-dropbox-final.component.css']
})
export class DemoDropboxFinalComponent implements OnInit {

  public img: any;
  public name2: string;
  public file2;
  public myFile: any;
  constructor(public sanitizer: DomSanitizer) { }

  ngOnInit() {
  }

  fileChanged(event) {
    this.myFile = event.target.files[0];
    console.log(this.myFile)
  }

  handleSubmit(data) {
    //Create directory
    dbx.filesCreateFolder({ path: '/toma', autorename: true }).then(res => {
      console.log(" From filesCreateFolder")
      console.log(res)

      //Uploading the file:
      let file = this.myFile;
      let fileName = Math.random().toString(36).substring(2, 15) + Math.random().toString(36).substring(2, 15) + '.jpg';
      dbx.filesUpload({
        path: '/toma/' + fileName,   //file.name,
        contents: file,
        autorename: false,
        mode: 'add'
      }).then((response) => {
        console.log('Here is the response of successful creation from filesUpload')
        console.dir(response)
        dbx.filesListFolder({ path: '/toma/' })
          .then((response) => {
            console.log('From filesListFolder:')
            console.dir(response);
            let promises = [];
            for (let record of response.entries) {
              promises.push(dbx.filesGetThumbnail({ path: record.path_display, format: "jpeg",size:"w2048h1536" }));
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
              this.img= arr[0] 
              console.log(this.img)
            });
          })
          .catch(function (error) {
            console.log(error);
          });
      })
        .catch(function (error) {
          console.error(error);
        });
    }).catch(err => console.log(err))

  }
}
