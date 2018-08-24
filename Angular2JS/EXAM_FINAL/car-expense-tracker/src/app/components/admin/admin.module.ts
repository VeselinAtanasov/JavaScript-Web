
//Components
import { adminComponents } from '.';

//Modules
import { NgModule } from '@angular/core'
import { RouterModule } from "@angular/router";
import { CommonModule } from '@angular/common';  //Always add CommonModule in custom modules, otherwise we need to import BrowserModule
import { ReactiveFormsModule } from '@angular/forms';
import { AdminRoutingModule } from './admin-routing.module';

import { AdminGuard } from '../../core/guards/admin.guard';
import { AdminService } from '../../core/services/admin-service/admin.service';



//Services

@NgModule({
    declarations: [
        ...adminComponents
    ],
    imports: [
        CommonModule,
        RouterModule,
        ReactiveFormsModule,
        AdminRoutingModule
    ],
    providers: [
    AdminGuard,AdminService
    ],
    bootstrap: [
    ],
    exports: [
    ]
})

export class AdminModule { }