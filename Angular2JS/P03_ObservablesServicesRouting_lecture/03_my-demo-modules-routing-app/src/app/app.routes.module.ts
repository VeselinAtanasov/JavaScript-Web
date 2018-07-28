import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { AboutParamsComponent } from './about-params/about-params.component';
import { AuthenticatedRoute } from './shared/guards/authenticated-rout.service';

const routes: Routes = [
    { path: 'home', component: HomeComponent },
    { path: 'about', component: AboutComponent },
    //this is rout valid only for Authenticated users (app/shared/guards): 
    { path: 'about/:id/:name', component: AboutParamsComponent, canActivate :[AuthenticatedRoute] },
    { path: '', component: HomeComponent },
]

@NgModule({
    imports:[RouterModule.forRoot(routes)],
    exports:[RouterModule],
    //register this as a service
    providers: [AuthenticatedRoute]
})
export class AppRoutesModule { }