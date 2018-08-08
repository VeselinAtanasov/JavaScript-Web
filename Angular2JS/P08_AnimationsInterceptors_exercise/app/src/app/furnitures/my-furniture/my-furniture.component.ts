import { Component, OnInit } from '@angular/core';
import { SingleFurniture } from '../../models/single-furniture.model';
import { FurnitureService } from '../../services/furniture.service';

@Component({
  selector: 'app-my-furniture',
  templateUrl: './my-furniture.component.html',
  styleUrls: ['./my-furniture.component.css']
})
export class MyFurnitureComponent implements OnInit {

  public furnitures : SingleFurniture[];

  constructor(private furnitureService: FurnitureService) { }

  ngOnInit() {

    this.furnitureService
      .getMyFurniture()
      .subscribe(allFurniture => {
        this.furnitures=allFurniture
      })
  }
  deleteItem(id: string){
    console.log(id)
    this.furnitureService
    .deleteFurniture(id)
    .subscribe(res => {
      this.furnitures = this.furnitures.filter(f => f.id !== id);
    });

  }

}
