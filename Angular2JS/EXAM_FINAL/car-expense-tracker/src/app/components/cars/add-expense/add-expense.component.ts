import { Component, OnInit } from '@angular/core';
import {FormGroup, FormControl, Validators, AbstractControl } from '@angular/forms';
import { ActivatedRoute } from '../../../../../node_modules/@angular/router';
import { CarModel } from '../../../core/models/cars/car.model';
import { CarsService } from '../../../core/services/cars-service/cars.service';
import { ExpenseService } from '../../../core/services/expense-service/expense.service';
import { ExpensesModel } from '../../../core/models/expenses/expenses';

const priceRegex: RegExp = /^(\+?(0|[1-9]\d*))(\.(0|[1-9]\d*))?$/;

@Component({
  selector: 'app-add-expense',
  templateUrl: './add-expense.component.html',
  styleUrls: ['./add-expense.component.css']
})
export class AddExpenseComponent implements OnInit {

  public carId: string;
  public car: CarModel;
  public expenseForm :FormGroup;
 
  constructor(
    private route: ActivatedRoute,
    private carService: CarsService,
    private expenseService: ExpenseService
  ) { }


  initExpenseForm() {
    this.expenseForm = new FormGroup({
      'initialInvestment': new FormControl(0, [
        Validators.pattern(priceRegex)
      ]),
      'fuel': new FormControl(0, [
        Validators.pattern(priceRegex)
      ]),
      'others': new FormControl(0, [
        Validators.pattern(priceRegex)
      ]),
      'carRepair': new FormControl(0, [
        Validators.pattern(priceRegex)
      ]),
      'consumables': new FormControl(0, [
        Validators.pattern(priceRegex)
      ]),
      'accessories': new FormControl(0, [
        Validators.pattern(priceRegex)
      ]),
      'cleaning': new FormControl(0, [
        Validators.pattern(priceRegex)
      ]),
      'taxes': new FormControl(0, [
        Validators.pattern(priceRegex)
      ]),
    });
  }

  ngOnInit() {
    this.carId = this.route.snapshot.paramMap.get('id');
    console.log(this.carId)
    this.initExpenseForm();
    this.expenseService.getExpensesByCarId(this.carId)
      .subscribe(expenses => {
        console.log(expenses)
          
        // this.expenseForm.patchValue({ ...expenses[0] })
      })

    this.carService.getCarById(this.carId).subscribe(data => {
      console.log(data)
      this.car = data
    })
  }
  updateCarExpenses() {

  }

  checker(){
    console.log(this.expenseForm)
  }

  get initialInvestment(): AbstractControl {
    return this.expenseForm.get('initialInvestment');
  }
  get fuel(): AbstractControl {
    return this.expenseForm.get('fuel');
  }
  get others(): AbstractControl {
    return this.expenseForm.get('others');
  }
  get carRepair(): AbstractControl {
    return this.expenseForm.get('carRepair');
  }
  get consumables(): AbstractControl {
    return this.expenseForm.get('consumables');
  }
  get accessories(): AbstractControl {
    return this.expenseForm.get('accessories');
  }
  get cleaning(): AbstractControl {
    return this.expenseForm.get('cleaning');
  }
  get taxes(): AbstractControl {
    return this.expenseForm.get('taxes');
  }


}
