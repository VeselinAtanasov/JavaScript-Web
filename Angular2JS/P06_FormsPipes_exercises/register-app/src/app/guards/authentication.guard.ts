
import { Injectable } from "@angular/core";
import { Router, CanActivate} from '@angular/router';
import { UserAdministration } from "../services/user.administration-service";

@Injectable()
export class AuthenticatedGuard implements CanActivate {
    constructor(private router: Router, private authenticationService: UserAdministration){

    }

    canActivate() {
        if(this.authenticationService.isLogged()){
            console.log('Returned true')
            return true;
        }
        console.log('Returned false')
        this.router.navigate(['/login']);
        return false;
    }

}