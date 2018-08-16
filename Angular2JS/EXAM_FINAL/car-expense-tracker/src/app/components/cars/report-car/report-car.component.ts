import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '../../../../../node_modules/@angular/router';
import { CarModel } from '../../../core/models/cars/car.model';
import { ExpensesModel } from '../../../core/models/expenses/expenses';
import { CarsService } from '../../../core/services/cars-service/cars.service';
import { ExpenseService } from '../../../core/services/expense-service/expense.service';

const label = {
  accessories : 'Accessories',
  carRepair: 'Repairs',
  cleaning: 'Cleaning',
  consumables: 'Consumables',
  fuel : 'Fuel',
  initialInvestment: 'Initial Price',
  others : 'Others',
  taxes: 'Taxes',
}
const colors =[
  'rgba(0, 255, 255, 0.2)',
  'rgba(255, 253, 83, 0.7)',
  'rgba(0, 214, 83, 0.9)',
  'rgba(255, 134, 83, 0.7)',
  'rgba(255, 0, 0, 0.2)',
  'rgba(0, 255, 0, 0.2)',
  'rgba(0, 0, 255, 0.2)',
  'rgba(123, 66, 255, 0.2)'


]

@Component({
  selector: 'app-report-car',
  templateUrl: './report-car.component.html',
  styleUrls: ['./report-car.component.css']
})


export class ReportCarComponent implements OnInit {

  public pieChartLabels: Array<string> ;
  public pieChartData:  Array<number> ;
  public pieChartDataPercentage :  Array<number>;
  public backgroundColor:  Array<string>
  public pieChartType: string = 'pie';

  public reportId : string;
  public car : CarModel;
  public expense : ExpensesModel

  constructor(
    private route :ActivatedRoute,
    private carService : CarsService,
    private expenseService : ExpenseService
  ) { }

  ngOnInit() {
    this.reportId =  this.route.snapshot.paramMap.get('id');
    //console.log(this.reportId)

    this.carService.getCarById(this.reportId).subscribe(car => this.car=car)
    this.expenseService.getExpensesByCarId(this.reportId).subscribe(expenses => {
      this.expense =expenses[0]
     // console.log(this.expense)
      this.loadChartData(this.expense)

      // console.log(this.pieChartLabels);
       console.log(this.pieChartData);
      // console.log(this.backgroundColor);

      console.log(this.pieChartDataPercentage)
    })
    
  }
  loadChartData(expense) : void{
    this.pieChartLabels = Object.values(Object.keys(label).sort((a,b)=>a.localeCompare(b)));
    this.pieChartData = this.fillChartData(expense,this.pieChartLabels);
    this.pieChartDataPercentage =this.fillPercentageChartData(expense,this.pieChartLabels)
    this.backgroundColor= colors;
  }
  fillChartData(expense,modifiedLabels) : Array<number>{
    let arr : Array<number>=[];
    for(let l of modifiedLabels){
      if(expense.hasOwnProperty(l)){
        arr.push(expense[l]);
      }
    }
    return arr;
  }
  fillPercentageChartData(expense,modifiedLabels){
    let arr : Array<number>=[];
    for(let l of modifiedLabels){
      if(expense.hasOwnProperty(l)){
        arr.push(expense[l]);
      }
    }
    let sum = arr.reduce((a,b) => a+b);
    let result = arr.map(e => Number(((e/sum) * 100).toFixed(2)) )
    return result;
  }


  public chartClicked(e: any): void {
    console.log(e);
  }

  public chartHovered(e: any): void {
    e['active']=Array(0)
  }
  handler(data){
    console.log('....logging from handler')
    console.log(data)
  }

}
