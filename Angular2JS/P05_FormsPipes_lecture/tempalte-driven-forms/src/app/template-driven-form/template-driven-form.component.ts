import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-template-driven-form',
  templateUrl: './template-driven-form.component.html',
  styleUrls: ['./template-driven-form.component.css']
})
export class TemplateDrivenFormComponent implements OnInit {
  hasError: any;
  model:any;
  constructor() { 
    this.model ={
      processor: "AMG"
    }
  }

  login(userData){
    //Here I am making request for registration => I need to subscriber to this observebel.
    //Very important in case of err => display a message to the user , i.e my property hasError should be set to some value and 
    //I should have a div inside the template which in case hasError != null to be visible
    console.log(userData)
    console.log(this.model)
  }
  log(data){
    console.dir(data.invalid)
  }

  ngOnInit() {
    console.log(this.model)
  }

}
