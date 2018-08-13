import { Component, OnInit } from '@angular/core';
import { GarageService } from '../../../core/services/garage-services/garage.service';
import { AuthService } from '../../../core/services/authentication-service/auth.service';
import { GarageModel } from '../../../core/models/garage/garage.model';
import { CarsService } from '../../../core/services/cars-service/cars.service';
import { CarModel } from '../../../core/models/cars/car.model';

@Component({
  selector: 'app-my-garage',
  templateUrl: './my-garage.component.html',
  styleUrls: ['./my-garage.component.css']
})
export class MyGarageComponent implements OnInit {

  public userID: string;
  public garageData : GarageModel;
  public cars : Array<CarModel>
  constructor(
    private garageService: GarageService, 
    private authService: AuthService,
    private carService :CarsService
  ) { }

  ngOnInit() {
    this.userID = this.authService.currentSessionData['userId']
    if (!this.userID){
      return
    }
    this.garageService
      .getMyGarage(this.userID)
      .subscribe(data => {
        this.garageData = data
        let allCars = this.garageData[0].cars;
        this.carService.getAllCarsByUserID(this.userID).subscribe(data => this.cars=data)
      })
  }

}
