import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators, AbstractControl } from '@angular/forms';
import {RegisterModel} from '../../../core/models/auth-models/register.model';
import {passwordMatcher} from '../password-matcher.directive';
import { AuthService } from '../../../core/services/authentication-service/auth.service';


const usernameRegex : RegExp = /^[A-Z][A-Za-z0-9]+$/;
const passwordRegex : RegExp = /^[A-Za-z0-9]{4,10}$/;
const nameRegex : RegExp = /^[A-Z][a-z]+/;
const emailRegex: RegExp = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  public registerForm: FormGroup;
  public registerModel: RegisterModel;

  constructor(private authService :AuthService) { }

  ngOnInit() {
    this.registerForm = new FormGroup({
      'username': new FormControl('', [
        Validators.required,
        Validators.pattern(usernameRegex)
      ]),
      'password': new FormControl('', [
        Validators.required,
        Validators.minLength(4),
        Validators.maxLength(16),
        Validators.pattern(passwordRegex)
      ]),
      'confirmPassword': new FormControl(''),
      'firstName': new FormControl('', [
        Validators.required,
        Validators.pattern(nameRegex),
      ]),
      'lastName': new FormControl('', [
        Validators.required,
        Validators.pattern(nameRegex)
      ]),
      'email': new FormControl('', [
        Validators.required,
        Validators.pattern(emailRegex)
      ]),
    },{ validators: passwordMatcher })
  }

  register(){

  let userData =this.registerForm.value;
  delete userData['confirmPassword']
  delete userData['password']
  this.authService.register(userData).subscribe(data =>console.log(data),err => console.log(err))
  }

  get username(): AbstractControl {
    return this.registerForm.get('username');
  }

  get password(): AbstractControl {
    return this.registerForm.get('password');
  }

  get confirmPassword(): AbstractControl {
    return this.registerForm.get('confirmPassword');
  }

  get firstName(): AbstractControl {
    return this.registerForm.get('firstName');
  }

  get lastName(): AbstractControl {
    return this.registerForm.get('lastName');
  }

  get email(): AbstractControl {
    return this.registerForm.get('email');
  }

}
