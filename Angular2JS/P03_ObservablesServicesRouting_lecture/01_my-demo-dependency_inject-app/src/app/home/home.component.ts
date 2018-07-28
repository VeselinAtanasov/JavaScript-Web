import { Component, OnInit } from '@angular/core';
import { HomeService} from './home.service'; 
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  someData: string;
  constructor(public homeService:HomeService) { 
    this.someData=homeService.getData();
  }

  ngOnInit() {
  }

}
