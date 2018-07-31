import { Component, OnInit } from "@angular/core";
import { RegisterModel } from '../../models.ts/register-model';
import { UserAdministration } from '../../services/user.administration-service';
import { Router } from "@angular/router";

@Component({
  selector: 'app-register-form',
  templateUrl: './register-form.component.html',
  styleUrls: ['./register-form.component.css']
})
export class RegisterFormComponent implements OnInit {
  public myModel: RegisterModel;
  public error:string;
  constructor(private authenticationService: UserAdministration, private router: Router) {
    this.myModel = new RegisterModel('', '', '', '', '', 18)
  }

  registerUser(data) {
    let user = data.value
    delete user.confirmPassword;
     this.authenticationService.register(user).subscribe(data =>{
       console.log(data)
       this.router.navigate(['/home'])
     },err =>{
       if(err){
         console.log(err)
         this.error=err.error.description;
         return;
       }
     })
  }

  ngOnInit() {
  }

}
