import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ToastrModule} from 'ngx-toastr'
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { AppRoutingModule } from './app.routing';

import { ReactiveFormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { NavigationComponent } from './navigation/navigation.component';
import { SigninComponent } from './authentication/signin/signin.component';
import { SignupComponent } from './authentication/signup/signup.component';
import { HomeComponent } from './home/home.component';
import { AuthService } from './authentication/auth.service';
import { JwtInterceptors } from './interceptors/jwt.interceptor';
import { ErrorInterceptor } from './interceptors/error.interceptor';
import { CreateFurnitureComponent } from './furnitures/create-furniture/create-furniture.component';
import { AllFurnitureComponent } from './furnitures/all-furniture/all-furniture.component';
import { MyFurnitureComponent } from './furnitures/my-furniture/my-furniture.component';
import { FurnitureDetailsComponent } from './furnitures/furniture-details/furniture-details.component';

//Services:
import {FurnitureService} from './services/furniture.service'
import { SuccessInterceptor } from './interceptors/success.interceptor';


@NgModule({
  declarations: [
    AppComponent,
    NavigationComponent,
    SigninComponent,
    SignupComponent,
    HomeComponent,
    CreateFurnitureComponent,
    AllFurnitureComponent,
    MyFurnitureComponent,
    FurnitureDetailsComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    BrowserAnimationsModule,
    ReactiveFormsModule,
    AppRoutingModule,
    HttpClientModule,
    ToastrModule.forRoot()
  ],
  providers: [ 
    AuthService,
    FurnitureService,
    {
      provide: HTTP_INTERCEPTORS,
      useClass: JwtInterceptors,
      multi: true
    },
    {
      provide: HTTP_INTERCEPTORS,
      useClass: ErrorInterceptor,
      multi: true
    },
    {
      provide: HTTP_INTERCEPTORS,
      useClass: SuccessInterceptor,
      multi: true
    }

  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
