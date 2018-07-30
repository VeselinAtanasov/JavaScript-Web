import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from "@angular/forms";
import { HttpClientModule } from "@angular/common/http";

import { AppComponent } from './app.component';
import { RegisterComponent } from './components/register/register.component';
import { User } from './services/userService';
import { TestService } from './services/testService';

@NgModule({
  declarations: [
    AppComponent,
    RegisterComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [User, TestService],
  bootstrap: [AppComponent]
})
export class AppModule { }
