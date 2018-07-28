import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { HomeService } from '../home.service';
import { HomeComponent } from '../home.component';
import { AboutComponent } from '../../about/about.component';
import { AboutParamsComponent } from '../../about-params/about-params.component';

@NgModule({
  imports: [
    CommonModule,
    HttpClientModule
  ],
  declarations: [
    HomeComponent,
    AboutComponent,
    AboutParamsComponent
  ],
  exports:[HomeComponent],
  providers:[HomeService]
})
export class HomeModule { }
