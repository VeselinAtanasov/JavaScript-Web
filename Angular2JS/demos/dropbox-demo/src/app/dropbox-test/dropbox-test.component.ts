import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-dropbox-test',
  templateUrl: './dropbox-test.component.html',
  styleUrls: ['./dropbox-test.component.css']
})
export class DropboxTestComponent implements OnInit {
  file:any;
  constructor() { }

  fileChanged(e) {
      this.file = e.target.files[0];
      console.log(this.file)
  }
  uploadDocument(file) {
    let fileReader = new FileReader();
    fileReader.onload = (e) => {
      console.log(fileReader.result);
    }
    fileReader.readAsText(this.file);
}
  ngOnInit() {
  }

}
