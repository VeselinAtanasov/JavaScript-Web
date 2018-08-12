import { NgModule } from '@angular/core';
import { Route, RouterModule } from '@angular/router'
import { HomeComponent } from './components/shared/home/home.component';
import { GarageModule } from './components/garage/garage.module';
import { AuthenticationModule } from './components/authentication/authentication.module';
import { CarsModule } from './components/cars/cars.module';



const routes: Route[] = [
    { path: '', pathMatch: 'full', redirectTo: 'home' },
    { path: 'home', component: HomeComponent },
    { path: 'auth', loadChildren: () => AuthenticationModule },
    { path: 'garage', loadChildren: () => GarageModule },
    { path: 'cars', loadChildren: () => CarsModule },
]

@NgModule({
    imports: [
        RouterModule.forRoot(routes)
    ],
    exports: [RouterModule]
})
export class AppRoutingModule { }