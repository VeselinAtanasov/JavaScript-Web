import { Component, OnInit } from '@angular/core';
import { SingleFurniture } from '../../models/single-furniture.model';
import { FurnitureService } from '../../services/furniture.service';
import { ActivatedRoute } from '../../../../node_modules/@angular/router';

@Component({
  selector: 'app-furniture-details',
  templateUrl: './furniture-details.component.html',
  styleUrls: ['./furniture-details.component.css']
})
export class FurnitureDetailsComponent implements OnInit {

  currentFurniture: SingleFurniture
  constructor(private furnitureService: FurnitureService, private route: ActivatedRoute) { }

  ngOnInit() {
    const id = this.route.snapshot.paramMap.get('id');
    
    console.log(id)
    this.furnitureService.getFurnitureDetails(id).subscribe((furniture) => {
      console.log(furniture)
      this.currentFurniture = furniture
    })

  }

}
