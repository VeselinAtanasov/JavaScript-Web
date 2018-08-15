import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '../../../../../node_modules/@angular/router';
import { CarsService } from '../../../core/services/cars-service/cars.service';
import { CarModel } from '../../../core/models/cars/car.model';

@Component({
  selector: 'app-details-car',
  templateUrl: './details-car.component.html',
  styleUrls: ['./details-car.component.css']
})
export class DetailsCarComponent implements OnInit {

  public carId: string;
  public car : CarModel
  constructor(
    private route: ActivatedRoute,
    private carService: CarsService,
  ) { }

  ngOnInit() {
    this.carId=this.route.snapshot.paramMap.get('id');
    console.log(this.carId)

    this.carService.getCarById(this.carId).subscribe(data =>{ 
      console.log(data)
      this.car=data
    })
  }

}
