import { Injectable } from '@angular/core';
import {
    CanActivate,
    ActivatedRouteSnapshot,
    RouterStateSnapshot,
    Router
} from '@angular/router';
import { Observable } from 'rxjs';
import { GarageService } from '../services/garage-services/garage.service';
import { AuthService } from '../services/authentication-service/auth.service';



@Injectable()
export class CreateGarageGuard implements CanActivate {
    constructor(
        private garageService: GarageService,
        private authService: AuthService,
        private router: Router
    ) { }
    canActivate(
        next: ActivatedRouteSnapshot,
        state: RouterStateSnapshot): Observable<boolean> | Promise<boolean> | boolean {
        return this.check();
    }

    check(): boolean {
        let currentUserID = JSON.parse(localStorage.getItem('currentUser'))['userId']
        this.garageService.getMyGarage(currentUserID).subscribe(data => {
            if(data.length===0){
                return true;
            }
            this.router.navigate(['/garage/my'])
            return false
        })

        return false
    }
}