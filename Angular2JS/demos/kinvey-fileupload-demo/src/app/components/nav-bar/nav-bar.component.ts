import { Component, OnInit } from "@angular/core";
import { UserAdministration } from '../../services/user.administration-service';
import { Router } from "@angular/router";

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.css']
})
export class NavBarComponent implements OnInit {

  public error : string;
  constructor(private authenticationService: UserAdministration, private router: Router) { }

  ngOnInit() {
  }

  logout() {
    this.authenticationService
      .logout()
      .subscribe(data => {
        localStorage.clear();
        this.router.navigate(['/login'])
      }, err => this.error=err
      )
  }

  isAuth(): boolean {
    return this.authenticationService.isLogged();
  }

  getUsername(): string {
    return this.authenticationService.getUsername();
  }

}
