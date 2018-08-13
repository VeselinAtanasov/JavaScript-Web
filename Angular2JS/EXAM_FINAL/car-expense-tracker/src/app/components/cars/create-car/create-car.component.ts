import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators, AbstractControl } from '@angular/forms';
import { CarModel } from '../../../core/models/cars/car.model';
import { CarsService } from '../../../core/services/cars-service/cars.service';
import { GarageService } from '../../../core/services/garage-services/garage.service';
import { DropBoxConnector } from '../../../core/external-apis/dropbox-api';
import { AuthService } from '../../../core/services/authentication-service/auth.service';

@Component({
  selector: 'app-create-car',
  templateUrl: './create-car.component.html',
  styleUrls: ['./create-car.component.css']
})
export class CreateCarComponent implements OnInit {

  public carForm: FormGroup;
  public currentCarModel: CarModel;

  constructor(
    private carService: CarsService,
    private garageService: GarageService,
    private authService: AuthService
  ) { }

  ngOnInit() {

    this.carForm = new FormGroup({
      'carName': new FormControl('', [
        Validators.required
      ]),
      'carBrand': new FormControl(''),
      'carModel': new FormControl(''),
      'carDescription': new FormControl(''),
      'initialInvestment': new FormControl(''),
      'carPicture': new FormControl(''),
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

  fileChanged(event) {
    this.carForm['carPicture'] = event.target.files[0];
    console.log(this.carForm['carPicture'])
  }

  createCar() {
    let fileName = Math.random().toString(36).substring(2, 15) + Math.random().toString(36).substring(2, 15) + '.jpg';

    DropBoxConnector.filesUpload(this.authService.getUserName(), fileName, this.carForm['carPicture'])
      .then(data => {
        console.dir(data);
        let dropboxData = {
          dropBoxUserId: data.id, // "id:656fdfj7574" id: should be removed in case of DropBoxApi invocation
          pictureName: data.name,
          path_display: data.path_display,
        };

        let currentCar = this.carForm.value;
        currentCar['dropboxData'] = dropboxData;


        let promise = DropBoxConnector.filesGetThumbnail(data.path_display)
        Promise.resolve(promise).then((value) => {
          let url = window.URL.createObjectURL(value.fileBlob);



          currentCar['carPicture'] = url

          this.carService.createCar(currentCar).subscribe(data => {
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
                  cars: allCars,
                  dropboxData: garage['dropboxData']
                }
                this.garageService
                  .updateGarageById(garageId, garageData)
                  .subscribe(data => console.log(data),
                    err => console.log(err))
              }, err => console.log(err))
          }, err => console.log(err))
        });
      })
      .catch(err => console.log(err))
  }
}
