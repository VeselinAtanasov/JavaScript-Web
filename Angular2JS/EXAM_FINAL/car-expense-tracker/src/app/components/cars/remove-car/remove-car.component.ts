import { Component, OnInit } from '@angular/core';
import { CarModel } from '../../../core/models/cars/car.model';
import { CarsService } from '../../../core/services/cars-service/cars.service';
import { GarageService } from '../../../core/services/garage-services/garage.service';

@Component({
  selector: 'app-remove-car',
  templateUrl: './remove-car.component.html',
  styleUrls: ['./remove-car.component.css']
})
export class RemoveCarComponent implements OnInit {

  public userID: string
  public cars: Array<CarModel>
  constructor(
    private carService: CarsService,
    private garageService: GarageService
  ) { }

  ngOnInit() {
    console.log(this.cars)
    this.userID = JSON.parse(localStorage.getItem('currentUser'))['userId']
    if (!this.userID) {
      return
    }
    this.carService.getAllCarsByUserID(this.userID).subscribe(data => {
      this.cars = data
      console.log(this.cars)
    })
  }

  deleteCar(id: string) {

     this.carService.deleteCar(id).subscribe(data => console.log(data),err => console.log(err))
    this.garageService.getMyGarage(this.userID).subscribe(resp => {
      let customCars = []
      let allCars = []
      for (let car of this.cars) {
        if (id !== car['_id']) {
          customCars.push(car)
          allCars.push(car['_id'])
        }
      }
      // this.cars.filter(car => car['_id']!==id)
      this.cars = customCars;
      let myGarage = resp[0];

      let garageData = {
        garageDescription: myGarage['garageDescription'],
        garageName: myGarage['garageName'],
        garagePicture: myGarage['garagePicture'],
        isPublic: myGarage['isPublic'],
        cars: allCars
      }
        this.garageService.updateGarageById(myGarage['_id'], garageData).subscribe(data => console.log(data), err => console.log(err))

    })
  }
}
