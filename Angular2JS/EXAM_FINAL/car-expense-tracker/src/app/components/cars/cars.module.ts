
//Components
import { carComponents } from '.';

//Modules
import { NgModule } from '@angular/core'
import { CommonModule } from '@angular/common';  //Always add CommonModule in custom modules, otherwise we need to import BrowserModule
import {  ReactiveFormsModule } from '@angular/forms';
import { CarsRoutingModule } from './cars-routing.module';
import { CarsService } from '../../core/services/cars-service/cars.service';
import { GarageModule } from '../garage/garage.module';
import { AuthGuard } from '../../core/guards/auth.guard';




//Services



@NgModule({
    declarations: [
        ...carComponents,
        
    ],
    imports: [
        CommonModule,
        ReactiveFormsModule,
        CarsRoutingModule,
        GarageModule
    ],
    providers: [  
    CarsService,AuthGuard
    ],
    bootstrap: [
    ],
    exports: [
    ]
})

export class CarsModule { }