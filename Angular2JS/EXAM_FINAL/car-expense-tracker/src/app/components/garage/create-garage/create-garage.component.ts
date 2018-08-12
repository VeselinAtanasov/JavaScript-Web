import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators, AbstractControl } from '@angular/forms';
import { GarageModel } from '../../../core/models/garage/garage.model';
import { GarageService } from '../../../core/services/garage-services/garage.service';

@Component({
  selector: 'app-create-garage',
  templateUrl: './create-garage.component.html',
  styleUrls: ['./create-garage.component.css']
})
export class CreateGarageComponent implements OnInit {


  public garageFrom: FormGroup;
  public garageModel: GarageModel

  constructor(private garageService: GarageService) { }

  ngOnInit() {
    this.garageFrom = new FormGroup({
      'garageName': new FormControl('', [
        Validators.required
      ]),
      'garageDescription': new FormControl('', [
        Validators.required
      ]),
      'isPublic': new FormControl('')
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
  createGarage() {
    console.log(this.garageFrom.value)
    this.garageService.createGarage(this.garageFrom.value).subscribe(data => console.log(data), err => console.log(err))
  }

}
