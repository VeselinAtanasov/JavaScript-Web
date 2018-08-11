import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators, AbstractControl } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  public loginForm: FormGroup;

  constructor() { }

  ngOnInit() {
    this.loginForm = new FormGroup({
      'username': new FormControl('', [
        Validators.required
      ]),
      'password': new FormControl('', [
        Validators.required
      ])
    });
  }

  login() : void{
    console.log(this.loginForm.value)
  }
  get username(): AbstractControl {
    return this.loginForm.get('username');
  }

  get password(): AbstractControl {
    return this.loginForm.get('password');
  }


}
