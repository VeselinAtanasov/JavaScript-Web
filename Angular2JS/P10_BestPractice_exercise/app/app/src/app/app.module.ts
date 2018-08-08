import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { ToastrModule} from 'ngx-toastr'
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { AppRoutingModule } from './app.routing';
import { AuthModule } from './authentication/auth.module';
import { FurnitureModule } from './furnitures/furniture.module';

//Components
import { AppComponent } from './app.component';
import { NavigationComponent } from './navigation/navigation.component';
import { HomeComponent } from './home/home.component';
import { JwtInterceptors } from './interceptors/jwt.interceptor';
import { ErrorInterceptor } from './interceptors/error.interceptor';


//Services:

import { SuccessInterceptor } from './interceptors/success.interceptor';




@NgModule({
  declarations: [
    AppComponent,
    NavigationComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    // FormsModule,
    AuthModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    HttpClientModule,
    ToastrModule.forRoot(),
    FurnitureModule
  ],
  providers: [ 
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
