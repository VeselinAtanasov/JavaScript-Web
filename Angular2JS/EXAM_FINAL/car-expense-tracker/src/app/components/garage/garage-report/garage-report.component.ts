import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '../../../../../node_modules/@angular/router';
import { GarageModel } from '../../../core/models/garage/garage.model';
import { GarageService } from '../../../core/services/garage-services/garage.service';
import { CarsService } from '../../../core/services/cars-service/cars.service';
import { ExpenseService } from '../../../core/services/expense-service/expense.service';
import { CarModel } from '../../../core/models/cars/car.model';
import { ExpensesModel } from '../../../core/models/expenses/expenses';

@Component({
  selector: 'app-garage-report',
  templateUrl: './garage-report.component.html',
  styleUrls: ['./garage-report.component.css']
})
export class GarageReportComponent implements OnInit {

  // public pieChartLabels:string[] = ['Гориво', 'Ремон', 'Автомивка','Части'];
  // public pieChartData:number[] = [22.2, 44.8, 11.6,17.8,3.6];

  public userID: string;
  public garageID: string;
  public garage: GarageModel;
  public cars: Array<CarModel>;
  public expenses: Array<ExpensesModel>;

  public isDataCollected: boolean = false;

  public pieChartLabelsByCar: Array<string>;
  public pieChartDataByCar: Array<number>;
  public pieChartDataByCarPercentage: Array<number>;
  public pieChartType: string = 'pie';

  constructor(
    private route: ActivatedRoute,
    private garageService: GarageService,
    private carService: CarsService,
    private expenseService: ExpenseService
  ) { }

  ngOnInit() {
    this.garageID = this.route.snapshot.paramMap.get('id');
    this.garageService
      .getGarageById(this.garageID)
      .subscribe(garage => {
        this.garage = garage;
        this.userID = garage['_acl']['creator'];
        this.collectData()
      })
    this.carService
      .getAllCarsByGarageId(this.garageID)
      .subscribe(cars => {
        this.cars = cars.sort((a, b) => a['_id'].localeCompare(b['_id']));
        this.collectData()
      });
    this.expenseService
      .getExpensesByGarageId(this.garageID)
      .subscribe(expenses => {
        this.expenses = expenses;
        this.collectData()
      })
    this.collectData()
  }

  collectData() {
    if (this.garage && this.cars && this.expenses) {
      this.prepareReportByCar();
      this.prepareReportByCarPercentage();
      this.isDataCollected = true;
    }
  }

  prepareReportByCarPercentage(){
    let sum = this.pieChartDataByCar.reduce((a,b) => a+b);
    this.pieChartDataByCarPercentage = this.pieChartDataByCar.map(e => Number(((e / sum) * 100).toFixed(2)))
  }
  prepareReportByCar() {
    let allCarLabels = this.cars.map(car => {
      let id = car['_id'];
      let carName = `${car['carName']} - ${car['carBrand']} / ${car['carModel']}`
      return { id, carName }
    }).sort((a, b) => a['id'].localeCompare(b['id'])).map(e => e['carName'])
    let allCarValues = this.getCarValues(this.expenses).sort((a, b) => a['id'].localeCompare(b['id'])).map(e => e['value'])
    this.pieChartLabelsByCar = allCarLabels;
    this.pieChartDataByCar = allCarValues;

  }
  getCarValues(allExpenses) {
    let arr = ['initialInvestment', 'taxes', 'fuel', 'carRepair', 'consumables', 'accessories', 'cleaning', 'others']
    let result = [];
    for (let e of allExpenses) {
      result.push({
        id: e['carId'],
        value: e['initialInvestment'] + e['taxes'] + e['fuel'] + e['carRepair'] + e['consumables'] + e['accessories'] + e['cleaning'] + e['others']
      })
    }
    return result;
  }

}
