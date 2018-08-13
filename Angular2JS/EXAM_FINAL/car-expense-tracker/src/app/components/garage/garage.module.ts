
//Components
import { garageComponents } from '.';

//Modules
import { NgModule } from '@angular/core'
import { CommonModule } from '@angular/common';  //Always add CommonModule in custom modules, otherwise we need to import BrowserModule
import {  ReactiveFormsModule } from '@angular/forms';
import { GarageRoutingModule } from './garage-routing.module';
import { GarageService } from '../../core/services/garage-services/garage.service';



//Services



@NgModule({
    declarations: [
        ...garageComponents
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