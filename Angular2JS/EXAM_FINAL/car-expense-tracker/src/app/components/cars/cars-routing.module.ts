import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CreateCarComponent } from './create-car/create-car.component';


const furnitureRoutes: Routes = [
    { path: 'create', component: CreateCarComponent },
    { path: 'details/:id', component: CreateCarComponent },
    // { path: 'details/:id', component: FurnitureDetailsComponent },
    // { path: 'create', component: CreateFurnitureComponent },
    // { path: 'edit/:id', component: EditFurnitureComponent },
  ]
  
  @NgModule({
    imports: [RouterModule.forChild(furnitureRoutes)],
    exports: [RouterModule]
  })
  export class CarsRoutingModule { }