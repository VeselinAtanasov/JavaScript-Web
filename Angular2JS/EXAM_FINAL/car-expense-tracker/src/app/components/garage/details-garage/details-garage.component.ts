import { Component, OnInit } from '@angular/core';
import { GarageModel } from '../../../core/models/garage/garage.model';
import { CarModel } from '../../../core/models/cars/car.model';
import { GarageService } from '../../../core/services/garage-services/garage.service';
import { CarsService } from '../../../core/services/cars-service/cars.service';

@Component({
  selector: 'app-details-garage',
  templateUrl: './details-garage.component.html',
  styleUrls: ['./details-garage.component.css']
})
export class DetailsGarageComponent implements OnInit {

  public userID: string;
  public garageData : Array<GarageModel>;
  public cars : Array<CarModel>
  constructor(
    private garageService: GarageService, 
    private carService :CarsService
  ) { }

  ngOnInit() {
    this.userID = JSON.parse(localStorage.getItem('currentUser'))['userId']
    if (!this.userID){
      return
    }
    this.garageService
      .getMyGarage(this.userID)
      .subscribe(data => {
        this.garageData = data
        if (this.garageData.length === 0) {
          return
        }
        this.carService.getAllCarsByUserID(this.userID).subscribe(data =>{ this.cars=data})
      })
  }
}
