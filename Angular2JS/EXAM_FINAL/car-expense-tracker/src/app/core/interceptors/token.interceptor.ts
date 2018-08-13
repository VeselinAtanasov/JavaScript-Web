import {
    HttpResponse,
    HttpRequest,
    HttpEvent,
    HttpHandler,
    HttpInterceptor
} from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ToastrService } from 'ngx-toastr';
import { Router } from '@angular/router';
import { AuthService } from '../services/authentication-service/auth.service';

const appKey = "kid_SkGn5VhSm" // APP KEY HERE;
const appSecret = "1946192594dc4f1784bbef677ddb5c62" // APP SECRET HERE;


@Injectable()
export class TokenInterceptor implements HttpInterceptor {
    constructor(
        private toastr: ToastrService,
         private router: Router,
        private authService: AuthService) { }

    getAuthToken():string{
        return this.authService.authToken;
    }

    intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {

        if (request.url.endsWith('login') || request.url.endsWith(appKey) || !this.authService.isAuthenticated()) {
            request = request.clone({
                setHeaders: {
                    'Authorization': `Basic ${btoa(`${appKey}:${appSecret}`)}`,
                    'Content-Type': 'application/json'
                }
            })
        } else {
            request = request.clone({
                setHeaders: {
                    'Authorization': `Kinvey ${this.getAuthToken()}`,
                    'Content-Type': 'application/json'
                }
            })
        }
        return next.handle(request)
    }
}