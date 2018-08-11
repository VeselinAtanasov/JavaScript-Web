import { Component, OnInit } from '@angular/core';
import * as firebase from 'firebase';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  ngOnInit(): void{
    firebase.initializeApp({
      apiKey: "AIzaSyA5E9oFvr4nm0h-r29hoesHZXSchKgai18",
      authDomain: "ng-recipes-2507a.firebaseapp.com",
    })
  }
}
