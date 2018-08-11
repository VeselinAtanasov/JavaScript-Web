//Modules:
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
//Import Toaster module and browserAnimation Module
import {ToastrModule} from 'ngx-toastr';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {FormsModule} from '@angular/forms'
import {HttpClientModule} from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';

//Components
import { AppComponent } from './app.component';
import { SigninComponent } from './auth/signin/signin.component';
import { SignupComponent } from './auth/signup/signup.component';
import { RecipeCreateComponent } from './recipe/recipe-create/recipe-create.component';
import { RecipeDetailsComponent } from './recipe/recipe-details/recipe-details.component';
import { RecipeEditComponent } from './recipe/recipe-edit/recipe-edit.component';
import { RecipeListComponent } from './recipe/recipe-list/recipe-list.component';
import { RecipeStartComponent } from './recipe/recipe-start/recipe-start.component';
import { HeaderComponent } from './header/header/header.component';
import { AuthService } from './auth/auth.service';
import { AuthGuard } from './auth/auth.guard';


@NgModule({
  declarations: [
    AppComponent,
    SigninComponent,
    SignupComponent,
    RecipeCreateComponent,
    RecipeDetailsComponent,
    RecipeEditComponent,
    RecipeListComponent,
    RecipeStartComponent,
    HeaderComponent
  ],
  imports: [
    BrowserModule,
    ToastrModule.forRoot(),
    BrowserAnimationsModule,
    FormsModule,
    HttpClientModule,
    AppRoutingModule
  ],
  providers: [AuthService,AuthGuard],
  bootstrap: [AppComponent]
})
export class AppModule { }
