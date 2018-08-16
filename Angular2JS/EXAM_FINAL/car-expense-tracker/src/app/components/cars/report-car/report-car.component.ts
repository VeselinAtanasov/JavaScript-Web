import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-report-car',
  templateUrl: './report-car.component.html',
  styleUrls: ['./report-car.component.css']
})
export class ReportCarComponent implements OnInit {

  public pieChartLabels:string[] = ['Гориво', 'Ремон', 'Автомивка','Части'];
  public pieChartData:number[] = [22.2, 44.8, 11.6,17.8,3.6];
  public pieChartType:string = 'pie';
  
  constructor() { }

  ngOnInit() {
  }

  public chartClicked(e:any):void {
    console.log(e.value);
  }
 
  public chartHovered(e:any):void {
    console.log(e.value);
  }

}
