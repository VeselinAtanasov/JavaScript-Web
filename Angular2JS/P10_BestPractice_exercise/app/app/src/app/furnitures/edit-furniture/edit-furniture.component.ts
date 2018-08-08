import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '../../../../node_modules/@angular/router';
import { FurnitureService } from '../../services/furniture.service';
import { FormGroup, FormControl, Validators } from '../../../../node_modules/@angular/forms';
import { Furniture } from '../../models/furniture.model';
const priceRegex: RegExp = /^(\+?(0|[1-9]\d*))(\.(0|[1-9]\d*))?$/;

@Component({
  selector: 'app-edit-furniture',
  templateUrl: './edit-furniture.component.html',
  styleUrls: ['./edit-furniture.component.css']
})
export class EditFurnitureComponent implements OnInit {

  public editFurnitureForm: FormGroup;
  public id :string
  constructor(
    private route: ActivatedRoute,
    private furnitureService: FurnitureService
  ) {  }

  initEditForm(){
    this.editFurnitureForm = new FormGroup({
      'make': new FormControl('', [
        Validators.required,
        Validators.minLength(4)
      ]),
      'model': new FormControl('', [
        Validators.required,
        Validators.minLength(4)
      ]),
      'year': new FormControl('' , [
        Validators.required,
        Validators.min(1950),
        Validators.max(2050)
      ]),
      'description': new FormControl('', [
        Validators.required,
        Validators.minLength(10)
      ]),
      'price': new FormControl('' , [
        Validators.required,
        Validators.pattern(priceRegex)
      ]),
      'image': new FormControl('', [
        Validators.required
      ]),
      'material': new FormControl()
    });
  }

  ngOnInit() {
    this.initEditForm();
    this.id = this.route.snapshot.paramMap.get('id');
    console.log(this.id)
    this.furnitureService
      .getFurnitureById(this.id)
      .subscribe(f => {
        this.editFurnitureForm.patchValue({...f})
        
      })
  }

  edit() {
    console.log(this.editFurnitureForm.value)
    console.log(this.id)
  
    this.furnitureService.editFurniture(this.id,this.editFurnitureForm.value).subscribe(data => console.log(data))
  }

  get make() {
    return this.editFurnitureForm.get('make');
  }
  get model() {
    return this.editFurnitureForm.get('model');
  }
  get year() {
    return this.editFurnitureForm.get('year');
  }
  get description() {
    return this.editFurnitureForm.get('description');
  }
  get price() {
    return this.editFurnitureForm.get('price');
  }
  get image() {
    return this.editFurnitureForm.get('image')
  }
  get material() {
    return this.editFurnitureForm.get('material');
  }

}
