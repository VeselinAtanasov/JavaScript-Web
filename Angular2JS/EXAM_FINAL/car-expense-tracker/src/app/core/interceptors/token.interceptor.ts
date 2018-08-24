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
import { dbDescription } from '../utils/db-config/db-configuration';

const appKey = dbDescription['appKey']  // APP KEY HERE;
const appSecret = dbDescription['appSecret']   // APP SECRET HERE;


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
        console.log(request)
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
                    'Authorization': `Kinvey ${localStorage.getItem('authToken')}`,
                    'Content-Type': 'application/json'
                }
            })
        }
        return next.handle(request)
    }
}