import { Component, OnInit } from "@angular/core";
import { LoginModel } from '../../models.ts/login-model';
import { UserAdministration } from '../../services/user.administration-service';
import { Router } from "@angular/router";

@Component({
  selector: 'app-login-form',
  templateUrl: './login-form.component.html',
  styleUrls: ['./login-form.component.css']
})
export class LoginFormComponent implements OnInit {
  public model: LoginModel;
  public error: string;

  constructor(private authenticationService: UserAdministration, private router: Router) {
    this.model = new LoginModel('', '')
  }

  handleLogin(formData) {
    let user = formData.value

    this.authenticationService
      .login(user)
      .subscribe(
        resp =>
          this.loginUser(resp),
        err =>
          this.error = err.error.description
      )
  }

  loginUser(data) {
    this.authenticationService.authToken = data['_kmd']['authtoken'];
    localStorage.setItem('authToken', data['_kmd']['authtoken']);
    localStorage.setItem('username', data["username"]);
    this.router.navigate(['/home'])

  }

  ngOnInit() {
  }

}
