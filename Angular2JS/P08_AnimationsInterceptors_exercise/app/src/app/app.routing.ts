import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';


// Components
import { HomeComponent } from './home/home.component';
import { SigninComponent } from './authentication/signin/signin.component';
import { SignupComponent } from './authentication/signup/signup.component';
import { CreateFurnitureComponent } from './furnitures/create-furniture/create-furniture.component';
import { AllFurnitureComponent } from './furnitures/all-furniture/all-furniture.component';
import { FurnitureDetailsComponent } from './furnitures/furniture-details/furniture-details.component';
import { MyFurnitureComponent } from './furnitures/my-furniture/my-furniture.component';

const routes: Routes = [
  { path: '', pathMatch: 'full', redirectTo: 'home' },
  { path: 'home', component: HomeComponent },
  { path: 'signin', component: SigninComponent },
  { path: 'signup', component: SignupComponent },
  {
    path: 'furniture', children: [
      { path: 'all', component: AllFurnitureComponent },
      { path: 'my', component: MyFurnitureComponent },
      { path: 'details/:id', component: FurnitureDetailsComponent },
      { path: 'create', component: CreateFurnitureComponent },
    ]
  }
]

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }