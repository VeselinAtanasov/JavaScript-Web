import { Component, OnInit, AfterViewChecked, AfterViewInit, AfterContentInit, AfterContentChecked } from '@angular/core';

@Component({
  selector: 'app-hooks',
  templateUrl: './hooks.component.html',
  styleUrls: ['./hooks.component.css']
})
export class HooksComponent implements OnInit, AfterContentInit, AfterContentChecked {
  public counter: number = 0;
  public counter2: number=0 ;
  name = " Veselin"
  constructor() {
  }

  ngOnInit() {
    console.log('ngOnInit')
  }
  ngAfterContentInit() {
    console.log('ngAfterContentInit')
  }
  ngAfterContentChecked() {
    console.log('ngAfterContentChecked')
    this.counter++ //works fine with this method
  }

  // ngAfterViewChecked() {
  //   console.log('ngAfterViewChecked')
  //   //  this.counter++  do not work with this method

  // }
  // ngAfterViewInit() {

  //   console.log('ngAfterViewInit')

  // }

  execute() {
    console.log('executed....')
    this.counter2++
  }

}
