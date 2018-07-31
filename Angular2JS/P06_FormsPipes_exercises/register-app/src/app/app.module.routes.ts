import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { HomeComponent } from './components/home/home.component';
import { LoginFormComponent } from './authentication/login-form/login-form.component';
import { RegisterFormComponent } from './authentication/register-form/register-form.component';



const routes: Routes = [
    { path: 'home', component: HomeComponent },
    { path: 'login', component: LoginFormComponent },
    { path: 'register', component: RegisterFormComponent },
]

@NgModule({
    imports:[RouterModule.forRoot(routes)],
    exports:[RouterModule],
    //register this as a service
    providers: []
})
export class AppRoutesModule { }