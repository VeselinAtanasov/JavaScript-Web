import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { FurnitureService } from '../../services/furniture.service';
import { Furniture } from '../../models/furniture.model';

const priceRegex: RegExp = /^(\+?(0|[1-9]\d*))(\.(0|[1-9]\d*))?$/;

@Component({
  selector: 'app-create-furniture',
  templateUrl: './create-furniture.component.html',
  styleUrls: ['./create-furniture.component.css']
})

export class CreateFurnitureComponent implements OnInit {

  public createFurnitureForm: FormGroup;
  public myModel : Furniture = new Furniture("","","",2018,"","",0)

  constructor(private furnitureService: FurnitureService) {
    this.createFurnitureForm = new FormGroup({
      'make': new FormControl(this.myModel.make, [
        Validators.required,
        Validators.minLength(4)
      ]),
      'model': new FormControl(this.myModel.make, [
        Validators.required,
        Validators.minLength(4)
      ]),
      'year': new FormControl(this.myModel.make!=='' ? this.myModel.year : '', [
        Validators.required,
        Validators.min(1950),
        Validators.max(2050)
      ]),
      'description': new FormControl(this.myModel.description, [
        Validators.required,
        Validators.minLength(10)
      ]),
      'price': new FormControl(this.myModel.make!=="" ? this.myModel.price : '', [
        Validators.required,
        Validators.pattern(priceRegex)
      ]),
      'image': new FormControl(this.myModel.image, [
        Validators.required
      ]),
      'material': new FormControl(this.myModel.image)
    });
  }


  ngOnInit() {
  }

  submitCreateFurnitureForm() {
    console.log(this.createFurnitureForm.value);
    this.furnitureService
      .createFurniture(this.createFurnitureForm.value)
      .subscribe(); // only subscriber to the service if there is err we will catch it in the interceptor
  }

  //Getters are needed for hml div validation - in order to have access to the properties
  get make() {
    return this.createFurnitureForm.get('make');
  }
  get model() {
    return this.createFurnitureForm.get('model');
  }
  get year() {
    return this.createFurnitureForm.get('year');
  }
  get description() {
    return this.createFurnitureForm.get('description');
  }
  get price() {
    return this.createFurnitureForm.get('price');
  }
  get image() {
    return this.createFurnitureForm.get('image')
  }
  get material() {
    return this.createFurnitureForm.get('material');
  }


}
