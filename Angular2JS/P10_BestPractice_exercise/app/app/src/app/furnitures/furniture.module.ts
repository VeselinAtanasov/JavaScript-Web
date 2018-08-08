
//Components
import { furnitureComponents } from './index';

//Modules
import { NgModule } from '@angular/core'
import { CommonModule } from '@angular/common';  //Always add CommonModule in custom modules, otherwise we need to import BrowserModule
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import{NgxPaginationModule} from 'ngx-pagination'


//Services
import { FurnitureService } from '../services/furniture.service';
import { FurnitureRoutingModule } from './furniture-routing.module';



@NgModule({
    declarations: [
        ...furnitureComponents
    ],
    imports: [
        CommonModule,
        FormsModule,
        NgxPaginationModule,
        ReactiveFormsModule,
        FurnitureRoutingModule,
    ],
    providers: [
        FurnitureService
    ],
    bootstrap: [
    ],
    exports: [
    ]
})

export class FurnitureModule { }