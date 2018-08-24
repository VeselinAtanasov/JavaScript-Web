
//Components
import { adminComponents } from '.';

//Modules
import { NgModule } from '@angular/core'
import { RouterModule } from "@angular/router";
import { CommonModule } from '@angular/common';  //Always add CommonModule in custom modules, otherwise we need to import BrowserModule
import { ReactiveFormsModule } from '@angular/forms';
import { AdminRoutingModule } from './admin-routing.module';
import { AuthGuard } from '../../core/guards/auth.guard';
import { AuthService } from '../../core/services/authentication-service/auth.service';

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
     AuthGuard,AuthService
    ],
    bootstrap: [
    ],
    exports: [
        AdminRoutingModule
    ]
})

export class AdminModule { }