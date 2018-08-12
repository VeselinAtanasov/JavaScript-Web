
//Components
import { garageComponents } from './index';

//Modules
import { NgModule } from '@angular/core'
import { CommonModule } from '@angular/common';  //Always add CommonModule in custom modules, otherwise we need to import BrowserModule
import {  ReactiveFormsModule } from '@angular/forms';
import { GarageRoutingModule } from './garage-routing.module';
import { GarageService } from '../../core/services/garage-services/garage.service';
import { CreateGarageComponent } from './create-garage/create-garage.component';


//Services



@NgModule({
    declarations: [
        ...garageComponents,
        CreateGarageComponent
    ],
    imports: [
        CommonModule,
        ReactiveFormsModule,
        GarageRoutingModule,
    ],
    providers: [
        GarageService
    ],
    bootstrap: [
    ],
    exports: [
    ]
})

export class GarageModule { }