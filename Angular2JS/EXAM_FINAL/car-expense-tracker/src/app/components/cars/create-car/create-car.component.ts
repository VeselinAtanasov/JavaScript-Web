import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators, AbstractControl } from '@angular/forms';
import { CarModel } from '../../../core/models/cars/car.model';
import { CarsService } from '../../../core/services/cars-service/cars.service';
import { GarageService } from '../../../core/services/garage-services/garage.service';

const urlValidator: RegExp = /^(ftp|http|https):\/\/[^ "]+$/;

@Component({
  selector: 'app-create-car',
  templateUrl: './create-car.component.html',
  styleUrls: ['./create-car.component.css']
})
export class CreateCarComponent implements OnInit {

  public carForm: FormGroup;
  public currentCarModel: CarModel;

  constructor(private carService: CarsService, private garageService: GarageService) { }

  ngOnInit() {

    this.carForm = new FormGroup({
      'carName': new FormControl('', [
        Validators.required
      ]),
      'carBrand': new FormControl(''),
      'carModel': new FormControl(''),
      'carDescription': new FormControl('', [
        Validators.required
      ]),
      'initialInvestment': new FormControl('', [
        Validators.required
      ]),
      'carPicture': new FormControl('', [
        Validators.pattern(urlValidator)
      ]),
    });
  }
  get carName(): AbstractControl {
    return this.carForm.get('carName');
  }
  get carBrand(): AbstractControl {
    return this.carForm.get('carBrand');
  }
  get carModel(): AbstractControl {
    return this.carForm.get('carModel');
  }
  get carDescription(): AbstractControl {
    return this.carForm.get('carDescription');
  }
  get initialInvestment(): AbstractControl {
    return this.carForm.get('initialInvestment');
  }
  get carPicture(): AbstractControl {
    return this.carForm.get('carPicture');
  }

  createCar() {
    this.carService.createCar(this.carForm.value).subscribe(data => {
      let carId = data['_id'];
      let creatorId = data['_acl']['creator']

      this.garageService
        .getMyGarage(creatorId)
        .subscribe(resp => {
          console.dir(resp)
          let garage = resp[0]
          let garageId = garage['_id']
          let allCars = garage['cars'];
          allCars.push(carId)

          let garageData = {
            garageDescription: garage['garageDescription'],
            garageName: garage['garageName'],
            garagePicture: garage['garagePicture'],
            isPublic: garage['isPublic'],
            cars: allCars
          }
          this.garageService.updateGarageById(garageId, garageData).subscribe(data => console.log(data), err => console.log(err))
        }, err => console.log(err))
    }, err => console.log(err))
  }

}
