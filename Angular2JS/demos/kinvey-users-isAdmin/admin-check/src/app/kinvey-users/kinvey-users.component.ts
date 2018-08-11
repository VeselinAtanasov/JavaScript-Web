import { Component, OnInit } from '@angular/core';

import { UserService } from '../user-service';

@Component({
  selector: 'app-kinvey-users',
  templateUrl: './kinvey-users.component.html',
  styleUrls: ['./kinvey-users.component.css']
})
export class KinveyUsersComponent implements OnInit {

  constructor(private userService :UserService) { }

  ngOnInit() {
  }
  register(event) {
    console.log(event)
    this.userService
      .register(event).subscribe(data => {
        console.log(data)
      }, err => console.log(err))
  }



}
