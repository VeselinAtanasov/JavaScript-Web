import { CanActivate } from "@angular/router";
import { Injectable } from "@angular/core";
import { Router } from '@angular/router';

@Injectable()
export class AuthenticatedRoute implements CanActivate {
    constructor(private router: Router){

    }

    canActivate() {
        // some if logic if(this.userservice.isAuthenticated()) return true;
        this.router.navigateByUrl('/home');
        return false;
    }

}