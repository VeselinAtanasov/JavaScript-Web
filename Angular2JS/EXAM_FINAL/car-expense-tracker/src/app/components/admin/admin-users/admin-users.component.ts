import { Component, OnInit } from '@angular/core';
import { AdminService } from '../../../core/services/admin-service/admin.service';
import { UserModel } from '../../../core/models/user/user.model';

@Component({
  selector: 'app-admin-users',
  templateUrl: './admin-users.component.html',
  styleUrls: ['./admin-users.component.css']
})
export class AdminUsersComponent implements OnInit {


  public users :Array<UserModel>;
  constructor(private adminService :AdminService) { }

  ngOnInit() {
    this.adminService.getAllUsers().subscribe(data =>{
      console.log(data)
      this.users = data
    })
  }

  deleteElement(id: string){
    console.log(id)
  }

}
