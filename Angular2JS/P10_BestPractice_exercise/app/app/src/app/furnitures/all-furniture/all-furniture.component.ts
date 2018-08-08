import { Component, OnInit } from '@angular/core';
import { FurnitureService } from '../../services/furniture.service';
import { Furniture } from '../../models/furniture.model';
import { SingleFurniture } from '../../models/single-furniture.model';
import { AuthService } from '../../authentication/auth.service';

@Component({
  selector: 'app-all-furniture',
  templateUrl: './all-furniture.component.html',
  styleUrls: ['./all-furniture.component.css']
})
export class AllFurnitureComponent implements OnInit {

  public furnitures : SingleFurniture[];
  pageSize: number =3;
  currentPage : number=1;

  constructor(private furnitureService: FurnitureService, private authService : AuthService) { }

  ngOnInit() {

    this.furnitureService
      .getAllFurniture()
      .subscribe(allFurniture => {
        this.furnitures=allFurniture
      })
  }

  pageChange(page){
    this.currentPage=page
  }
  deleteItem(id){
    this.furnitureService
    .deleteFurniture(id)
    .subscribe(res => {
      this.furnitures = this.furnitures.filter(f => f.id !== id);
    });
  }

}
