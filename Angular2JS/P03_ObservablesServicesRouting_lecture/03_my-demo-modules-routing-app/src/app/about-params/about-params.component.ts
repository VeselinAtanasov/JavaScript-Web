import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '../../../node_modules/@angular/router';

@Component({
  selector: 'app-about-params',
  templateUrl: './about-params.component.html',
  styleUrls: ['./about-params.component.css']
})
export class AboutParamsComponent implements OnInit {

  public id: number;
  public name : string;

  constructor(private route : ActivatedRoute) {

   }

  ngOnInit() {
    this.route.params.subscribe(params =>{
      console.log(params);
      this.id = params.id;
      this.name = params.name;
    } )
  }

}
