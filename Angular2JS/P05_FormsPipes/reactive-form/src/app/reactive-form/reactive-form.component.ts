import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';


@Component({
  selector: 'app-reactive-form',
  templateUrl: './reactive-form.component.html',
  styleUrls: ['./reactive-form.component.css']
})
export class ReactiveFormComponent implements OnInit {

  public registerForm :FormGroup ;
  password='123'
  constructor() {
    this.registerForm = new FormGroup({
      username: new FormControl('',[Validators.required]),
      password: new FormControl(),
      repeatPassword: new FormControl(),
    })

   }

  ngOnInit() {
  }

  save(){
    console.log(this.registerForm.get('password').value)
    if(this.registerForm.get('password').value){
      console.log('Yes')
    }
    console.log(this.registerForm.value)
  }

}
