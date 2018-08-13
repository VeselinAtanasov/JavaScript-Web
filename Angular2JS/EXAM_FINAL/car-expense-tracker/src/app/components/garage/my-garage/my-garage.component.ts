import { Component, OnInit } from '@angular/core';
import { GarageService } from '../../../core/services/garage-services/garage.service';
import { AuthService } from '../../../core/services/authentication-service/auth.service';
import { GarageModel } from '../../../core/models/garage/garage.model';
import { CarsService } from '../../../core/services/cars-service/cars.service';
import { CarModel } from '../../../core/models/cars/car.model';
import { DropBoxConnector } from '../../../core/external-apis/dropbox-api';

@Component({
  selector: 'app-my-garage',
  templateUrl: './my-garage.component.html',
  styleUrls: ['./my-garage.component.css']
})
export class MyGarageComponent implements OnInit {

  public userID: string;
  public garageData: Array<GarageModel>;
  public cars: Array<CarModel>
  constructor(
    private garageService: GarageService,
    private authService: AuthService,
    private carService: CarsService
  ) { }

  ngOnInit() {
    this.userID = this.authService.currentSessionData['userId']
    if (!this.userID) {
      return
    }

    DropBoxConnector
      .filesListFolder(this.authService.getUserName())
      .then(response => {
        console.log(response)
        let promises = [];
        for (let record of response.entries) {
          promises.push(DropBoxConnector.filesGetThumbnail(record.path_display));
        }
        Promise.all(promises).then((values) => {
      
          let storedPictures = {}
          for (let currentUrl of values) {
            let url = window.URL.createObjectURL(currentUrl.fileBlob);
            storedPictures[currentUrl['name']]=url
          }
          console.log(storedPictures)
          this.garageService
          .getMyGarage(this.userID)
          .subscribe(data => {
            //get all pictures of the user:
            console.log(data)
            for(let records of data){
              records['garagePicture'] = storedPictures[records['garagePicture']]
            }

            console.log(data)
            this.garageData = data
            if (this.garageData.length === 0) {
              return
            }
            this.carService.getAllCarsByUserID(this.userID).subscribe(data => { this.cars = data })
          })
        })
      }).catch(err => console.log(err))



      }

}
