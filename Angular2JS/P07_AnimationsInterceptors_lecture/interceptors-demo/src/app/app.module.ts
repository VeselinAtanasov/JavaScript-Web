//Modules:
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutesModule } from './app.module.routes';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';


//Components:
import { AppComponent } from './app.component';
import { NavBarComponent } from './components/nav-bar/nav-bar.component';
import { HomeComponent } from './components/home/home.component';
import { LoginFormComponent } from './authentication/login-form/login-form.component';
import { RegisterFormComponent } from './authentication/register-form/register-form.component';

//Used for interceptors:
import { HTTP_INTERCEPTORS } from '@angular/common/http';


//Services:
import { UserAdministration } from './services/user.administration-service';
import { AuthenticatedGuard } from './guards/authentication.guard';
import { TokenInterceptor } from './interceptors/token.interceptor';

@NgModule({
  declarations: [
    AppComponent,
    NavBarComponent,
    HomeComponent,
    LoginFormComponent,
    RegisterFormComponent
  ],
  imports: [
    BrowserModule,
    AppRoutesModule,
    HttpClientModule,
    FormsModule    
  ],
  providers: [
    UserAdministration,
    AuthenticatedGuard,
      {
        provide: HTTP_INTERCEPTORS,
        useClass: TokenInterceptor,
        multi: true
      }
  
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
