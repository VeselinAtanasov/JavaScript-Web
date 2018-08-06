import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validator, Validators } from '@angular/forms';

@Component({
  selector: 'app-reactive-form',
  templateUrl: './reactive-form.component.html',
  styleUrls: ['./reactive-form.component.css']
})
export class ReactiveFormComponent implements OnInit {

  public loginReactiveForm :FormGroup ;
  currentPass='123'; //hardcoded for testing
  err='';

  constructor() { 
    this.loginReactiveForm = new FormGroup({
      currentPass: new FormControl('',[Validators.required,Validators.minLength(3)]),
      newPass:new FormControl(''),
      repNewPass:new FormControl(''),
    })
  }
  saveData(){
    console.log(this.loginReactiveForm)
    console.log(this.loginReactiveForm.value)

    if(this.loginReactiveForm.get('currentPass').value !== this.currentPass){
      this.err="Your new pass is the same as the old one"
    }else if(this.loginReactiveForm.get('newPass').value !== this.loginReactiveForm.get('repNewPass').value){
      this.err="Password do not match"
    }else{
      console.log("Successful changed....")
    }
  }


  ngOnInit() {
  }

}
