import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { FurnitureService } from '../../services/furniture.service';

const priceRegex: RegExp = /^(\+?(0|[1-9]\d*))(\.(0|[1-9]\d*))?$/;

@Component({
  selector: 'app-create-furniture',
  templateUrl: './create-furniture.component.html',
  styleUrls: ['./create-furniture.component.css']
})

export class CreateFurnitureComponent implements OnInit {

  public createFurnitureForm: FormGroup;

  constructor(private furnitureService: FurnitureService) {
    this.createFurnitureForm = new FormGroup({
      'make': new FormControl('', [
        Validators.required,
        Validators.minLength(4)
      ]),
      'model': new FormControl('', [
        Validators.required,
        Validators.minLength(4)
      ]),
      'year': new FormControl('', [
        Validators.required,
        Validators.min(1950),
        Validators.max(2050)
      ]),
      'description': new FormControl('', [
        Validators.required,
        Validators.minLength(10)
      ]),
      'price': new FormControl('', [
        Validators.required,
        Validators.pattern(priceRegex)
      ]),
      'image': new FormControl('', [
        Validators.required
      ]),
      'material': new FormControl('')
    });
  }

  
  ngOnInit() {
  }
  submitCreateFurnitureForm() {
    console.log(this.createFurnitureForm.value);
    this.furnitureService
    .create(this.createFurnitureForm.value)
    .subscribe((data) =>console.log(data),err => console.log(err));
  }

  //Getters are needed for hml div validation - in order to have access to the properties
  get make() {
    return this.createFurnitureForm.get('make');
  }
  get model(){
    return this.createFurnitureForm.get('model');
  }
  get year(){
    return this.createFurnitureForm.get('year');
  }
  get description(){
    return this.createFurnitureForm.get('description');
  }
  get price(){
    return this.createFurnitureForm.get('price');
  }
  get image(){
    return this.createFurnitureForm.get('image')
  }
  get material() {
    return this.createFurnitureForm.get('material');
  }


}
