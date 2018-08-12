import { Component, OnInit } from '@angular/core';
import { GarageService } from '../../../core/services/garage-services/garage.service';
import { AuthService } from '../../../core/services/authentication-service/auth.service';

@Component({
  selector: 'app-my-garage',
  templateUrl: './my-garage.component.html',
  styleUrls: ['./my-garage.component.css']
})
export class MyGarageComponent implements OnInit {

  public userID : string;
  public garageData;
  constructor(private garageService: GarageService, private authService: AuthService) { }

  ngOnInit() {
    this.userID = this.authService.currentSessionData['userId']
    console.log(this.userID)
    this.garageService
    .getMyGarage(this.userID)
    .subscribe(data => {
      this.garageData=data
      console.log(this.garageData)
    },err => console.log(err))
  }

}
