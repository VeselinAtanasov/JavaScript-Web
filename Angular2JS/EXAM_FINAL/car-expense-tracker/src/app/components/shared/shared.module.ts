import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { RouterModule } from "@angular/router";

import {sharedComponents} from '.';
import { HomeComponent } from './home/home.component'

@NgModule({
    declarations: [
        ...sharedComponents,
        HomeComponent
      ],
      imports: [
        CommonModule,
        RouterModule
      ],
      exports: [
        ...sharedComponents,
        RouterModule
      ]
})
export class SharedModule {}