import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { RouterModule } from "@angular/router";
import { AppRoutingModule } from "../../app-routing.module";
import { ReactiveFormsModule } from '@angular/forms';

import {authenticationComponents} from '.';
import { PasswordMatcherDirective } from './password-matcher.directive'
import { AuthService } from "../../core/services/authentication-service/auth.service";

 
@NgModule({
    declarations: [
        ...authenticationComponents,
        PasswordMatcherDirective
      ],
      imports: [
        CommonModule,
        RouterModule,
        AppRoutingModule,
        ReactiveFormsModule
      ],
      providers: [AuthService],
      exports: [
        ...authenticationComponents
      ]
})
export class AuthenticationModule {}