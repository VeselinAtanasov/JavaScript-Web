import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from "@angular/forms";
import { HttpClientModule } from "@angular/common/http";

import { AppComponent } from './app.component';
import { KinveyUsersComponent } from './kinvey-users/kinvey-users.component';
import { KinveyUsersLoginComponent } from './kinvey-users-login/kinvey-users-login.component';
import { UserRoleService } from './user-role.service';
import { UserService } from './user-service';

@NgModule({
  declarations: [
    AppComponent,
    KinveyUsersComponent,
    KinveyUsersLoginComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [UserRoleService,UserService],
  bootstrap: [AppComponent]
})
export class AppModule { }
