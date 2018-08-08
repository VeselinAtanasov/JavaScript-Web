import { Component, OnInit } from '@angular/core';
import { FurnitureService } from '../../services/furniture.service';
import { Furniture } from '../../models/furniture.model';
import { SingleFurniture } from '../../models/single-furniture.model';

@Component({
  selector: 'app-all-furniture',
  templateUrl: './all-furniture.component.html',
  styleUrls: ['./all-furniture.component.css']
})
export class AllFurnitureComponent implements OnInit {

  public furnitures : SingleFurniture[];
  constructor(private furnitureService: FurnitureService) { }

  ngOnInit() {

    this.furnitureService
      .getAllFurniture()
      .subscribe(allFurniture => {
        this.furnitures=allFurniture
      })
  }

}
