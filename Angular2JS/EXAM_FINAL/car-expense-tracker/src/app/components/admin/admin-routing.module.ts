import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminPanelComponent } from './admin-panel/admin-panel.component';
import { AdminUsersComponent } from './admin-users/admin-users.component';


const adminRoutes: Routes = [
    { path: 'panel', component: AdminPanelComponent },
    { path: 'users', component: AdminUsersComponent },
  ]
  
  @NgModule({
    imports: [RouterModule.forChild(adminRoutes)],
    exports: [RouterModule]
  })
  export class AdminRoutingModule { }
