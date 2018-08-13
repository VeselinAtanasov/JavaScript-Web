import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators, AbstractControl } from '@angular/forms';
import { GarageModel } from '../../../core/models/garage/garage.model';
import { GarageService } from '../../../core/services/garage-services/garage.service';
import { DropBoxConnector } from '../../../core/external-apis/dropbox-api';
import { AuthService } from '../../../core/services/authentication-service/auth.service';

@Component({
  selector: 'app-create-garage',
  templateUrl: './create-garage.component.html',
  styleUrls: ['./create-garage.component.css']
})
export class CreateGarageComponent implements OnInit {


  public garageFrom: FormGroup;
  public garageModel: GarageModel
  constructor(private garageService: GarageService, private authService: AuthService) { }

  ngOnInit() {
    this.garageFrom = new FormGroup({
      'garageName': new FormControl('', [
        Validators.required
      ]),
      'garageDescription': new FormControl('', [
        Validators.required
      ]),
      'garagePicture': new FormControl(''),
      'isPublic': new FormControl(false)
    });
  }
  get garageName(): AbstractControl {
    return this.garageFrom.get('garageName');
  }
  get garageDescription(): AbstractControl {
    return this.garageFrom.get('garageDescription');
  }
  get isPublic(): AbstractControl {
    return this.garageFrom.get('isPublic');
  }
  get garagePicture(): AbstractControl {
    return this.garageFrom.get('garagePicture');
  }

  fileChanged(event) {
    this.garageFrom['garagePicture'] = event.target.files[0];
    console.log(this.garageFrom['garagePicture'])
  }
  createGarage() {
    console.log(this.garageFrom.value)
    let garage = this.garageFrom.value;
    let fileName = Math.random().toString(36).substring(2, 15) + Math.random().toString(36).substring(2, 15) + '.jpg';

    DropBoxConnector.filesUpload(this.authService.getUserName(), fileName, this.garageFrom['garagePicture'])
      .then(data => {
        console.dir(data);
        garage['cars'] = []
        garage['dropboxData'] = {
          dropBoxUserId: data.id, // "id:656fdfj7574" id: should be removed in case of DropBoxApi invocation
          pictureName: data.name,
          path_display: data.path_display,
        };
         garage['garagePicture'] = data['name']

        this.garageService.createGarage(garage).subscribe(data => console.log(data), err => console.log(err))
      })
      .catch(err => console.log(err))
    
  }

}
