import {NgModule} from '@angular/core';
import {Route,RouterModule} from '@angular/router'
import { LoginComponent } from './components/authentication/login/login.component';
import { RegisterComponent } from './components/authentication/register/register.component';
import { HomeComponent } from './components/shared/home/home.component';



const routes : Route[]=[
    { path: '', pathMatch: 'full', redirectTo: 'home' },
    { path: 'home', component: HomeComponent },
    {path:'auth', children:[
        {path:'login',component: LoginComponent},
        {path:'register',component: RegisterComponent},
    ]}
]

@NgModule({
    imports: [
        RouterModule.forRoot(routes)
    ],
    exports: [RouterModule]
})
export class AppRoutingModule{}