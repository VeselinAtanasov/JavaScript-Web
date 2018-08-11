import {NgModule} from '@angular/core';
import {Route,RouterModule} from '@angular/router'
import { SigninComponent } from './auth/signin/signin.component';
import { SignupComponent } from './auth/signup/signup.component';
import { RecipeStartComponent } from './recipe/recipe-start/recipe-start.component';
import { RecipeCreateComponent } from './recipe/recipe-create/recipe-create.component';
import { RecipeEditComponent } from './recipe/recipe-edit/recipe-edit.component';
import { RecipeDetailsComponent } from './recipe/recipe-details/recipe-details.component';
import { RecipeListComponent } from './recipe/recipe-list/recipe-list.component';
import { AuthGuard } from './auth/auth.guard';

const routes : Route[]=[
    {path:'auth', children:[
        {path:'signin',component: SigninComponent},
        {path:'signup',component: SignupComponent},
    ]},
    {path: 'recipes',children :[
        {path:'',pathMatch : 'full', component: RecipeStartComponent},
        {path:'start',component: RecipeStartComponent},
        {path:'create',component: RecipeCreateComponent},
        {path:'edit/:id',component: RecipeEditComponent},
        {path:'details/:id',component: RecipeDetailsComponent},
        {path:'list',component: RecipeListComponent},
    ], canActivate :[AuthGuard]}
]

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule{}