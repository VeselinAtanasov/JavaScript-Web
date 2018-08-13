import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MyGarageComponent } from './my-garage/my-garage.component';
import { CreateGarageComponent } from './create-garage/create-garage.component';
import { DetailsGarageComponent } from './details-garage/details-garage.component';

const furnitureRoutes: Routes = [
    { path: 'my', component: MyGarageComponent },
    { path: 'create', component: CreateGarageComponent },
    { path: 'details/:id', component: DetailsGarageComponent },
    // { path: 'details/:id', component: FurnitureDetailsComponent },
    // { path: 'create', component: CreateFurnitureComponent },
    // { path: 'edit/:id', component: EditFurnitureComponent },
  ]
  
  @NgModule({
    imports: [RouterModule.forChild(furnitureRoutes)],
    exports: [RouterModule]
  })
  export class GarageRoutingModule { }