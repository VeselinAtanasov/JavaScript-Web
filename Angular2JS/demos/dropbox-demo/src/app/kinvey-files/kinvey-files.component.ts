import { Component, OnInit } from '@angular/core';

const appKey='kid_ByTClBJUX';
const appSecret='71d4107323b84785aff33a425fb53468'
const baseUrl = `https://baas.kinvey.com/blob/${appKey}`;

@Component({
  selector: 'app-kinvey-files',
  templateUrl: './kinvey-files.component.html',
  styleUrls: ['./kinvey-files.component.css']
})
export class KinveyFilesComponent implements OnInit {

  public img: any;
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
      console.log(data)

  }
}
