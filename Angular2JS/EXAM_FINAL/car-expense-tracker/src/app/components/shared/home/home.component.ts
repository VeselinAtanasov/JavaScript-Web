import { Component, OnInit } from '@angular/core';
import { GarageService } from '../../../core/services/garage-services/garage.service';
import { GarageModel } from '../../../core/models/garage/garage.model';
import { AuthService } from '../../../core/services/authentication-service/auth.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  public currentPage: number =1;
  public pageSize: number = 3;

  public allPublicGarages: Array<GarageModel>;
  public isAuth: any;

  constructor(private garageService: GarageService, private authService: AuthService) { }

  ngOnInit() {
    this.isAuth = this.authService.isAuthenticated()

    if (this.isAuth) {
      this.garageService.getAllGarages('public').subscribe(data => {
        this.allPublicGarages = data
      })
    }
  }

  pageChange(page) {
    this.currentPage = page
    
  }

}
