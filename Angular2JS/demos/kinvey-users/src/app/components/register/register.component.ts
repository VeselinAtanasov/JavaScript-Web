import { Component, OnInit } from '@angular/core';
import { User } from '../../services/userService';
import { TestService } from '../../services/testService';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})



export class RegisterComponent implements OnInit {

  constructor(private user: User, private books: TestService) { }
  register(user) {
    console.log(user)
    user['role'] = 'user'
    this.user.register(user).subscribe(data => {
      console.log(data)
      let info = {
        name: 'Admin'
      }
      // this.user.createRole(info).subscribe(role =>{
      //   console.log('Role...')
      //   console.log(role)
      // },err =>{
      //   console.log('Role error....')
      //   console.log(err)
      // })
    }, err => {
      console.log('Error....')
      console.log(err)
    })
  }
  login(user) {
    this.user.login(user).subscribe(data => {
      console.log(data)
       
      localStorage.setItem('auth', data['_kmd']["authtoken"])
      //  this.books.createData().subscribe(data => console.log(data),err => console.log(err))
      this.user.getRole(data['_id']).subscribe(data => console.log(data), err => console.log(err))
    }, err => console.log(err))
  }

  add(input) {
    this.books.createData().subscribe(data => console.log(data), err => console.log(err))
  }



  ngOnInit() {
  }

}
