import { Component, OnInit } from '@angular/core';
import { UserRoleService } from '../user-role.service';
import { UserService } from '../user-service';

@Component({
  selector: 'app-kinvey-users-login',
  templateUrl: './kinvey-users-login.component.html',
  styleUrls: ['./kinvey-users-login.component.css']
})
export class KinveyUsersLoginComponent implements OnInit {

  constructor(private authService: UserRoleService, private userService :UserService) { }

  ngOnInit() {
  }
  createRole() {

    let role = {
      name: 'Dev'
    }
    this.authService.createRole(role).subscribe(userRole => console.log(userRole), err => console.log(err))
  }

  assignRoleToUser(userId, roleId) {
    this.authService.assignRoleToUser(userId, roleId).subscribe(resp => console.log(resp), err => console.log(err))
  }

  deleteRoleFromUser(userId, roleId) {
    this.authService.deleteRoleFromUser(userId, roleId).subscribe(resp => console.log(resp), err => console.log(err))
  }
  getAllRoleMembers(roleId) {
    this.authService.getAllRoleMembers(roleId).subscribe(resp => console.log(resp), err => console.log(err))
  }
  listAllRoles() {
    this.authService.listAllRoles().subscribe(resp => console.log(resp), err => console.log(err))
  }
  getSpecificRole(roleId) {
    this.authService.getSpecificRole(roleId).subscribe(resp => console.log(resp), err => console.log(err))
  }
  getAllRole(userID) {
    this.authService.getRoleByUserId(userID).subscribe(resp => console.log(resp), err => console.log(err))
  }


  login(event) {
    console.log(event)

    this.userService
      .login(event)
      .subscribe(data => {
        console.log(data);
        localStorage.setItem('authToken',data['_kmd']['authtoken'])
        
        /* Start Testing User Service Methods */
        console.log('.....Invoke....')

        //this.userService.retrieveUser(data['_id']).subscribe(res => console.log(res),err => console.log(err))

       // this.userService.deleteUser(data['_id']).subscribe(res => console.log(res),err => console.log(err))

        /* End Testing User Service Methods */
        //.
        //.
        //.
        //.
        //.
        //.
        /* Start Testing User Role Service Methods */
        let adminRoleId = "5a015699-4cc1-48d9-9c04-a8e24f43b85f"
        let techRoleID = "887c6202-53a1-4965-ae3f-97c61ab04a44"

        // this.createRole() // method for creating a Role

        // this.assignRoleToUser(data['_id'],adminRoleId) // Method to assigning role to a user

        // this.authService.getRole('5b5ec1b5fbf445513b2cab71').subscribe(res => console.log(res))  //method for listing all Roles

        //  this.deleteRoleFromUser(data['_id'],techRoleID)  //method for deleting role from a user

        // this.getAllRole(data['_id'])

        //  this.getAllRoleMembers(adminRoleId)

        //  this.getSpecificRole(adminRoleId)

        //  this.listAllRoles() // method with returns an array of all defined Roles including Role Name

        /* End Testing User Role Service Methods */

      },
        err => console.log(err))
  }

}
