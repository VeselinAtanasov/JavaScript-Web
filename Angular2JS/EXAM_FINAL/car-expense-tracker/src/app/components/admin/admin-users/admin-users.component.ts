import { Component, OnInit } from '@angular/core';
import { AdminService } from '../../../core/services/admin-service/admin.service';

@Component({
  selector: 'app-admin-users',
  templateUrl: './admin-users.component.html',
  styleUrls: ['./admin-users.component.css']
})
export class AdminUsersComponent implements OnInit {


  public users ;
  constructor(private adminService :AdminService) { }

  ngOnInit() {
    this.adminService.getAllUsers().subscribe(data =>console.log(data))
  }

}
