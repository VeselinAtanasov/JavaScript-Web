import {
    HttpResponse,
    HttpRequest,
    HttpHandler,
    HttpEvent,
    HttpErrorResponse,
    HttpInterceptor
} from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Router } from "@angular/router";

//in order to handle 404 401 and other errors in the interceptor:
import { tap } from 'rxjs/operators';
import { UserAdministration } from '../services/user.administration-service';


const appKey = "kid_Sk3nscpNX" // APP KEY HERE;
const appSecret = "97d3910edce14cbaa493c647297612f7" // APP SECRET HERE;

@Injectable()
export class TokenInterceptor implements HttpInterceptor {

    constructor(private router: Router, private authService: UserAdministration) {

    }

    saveToken(data) {
        console.log(data)
        this.authService.authToken = data['_kmd']['authtoken'];
        localStorage.setItem('authToken', data['_kmd']['authtoken']);
        localStorage.setItem('username', data["username"]);
        this.router.navigate(['/home'])

    }
    intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
        if (request.url.endsWith('login') || request.url.endsWith(appKey)) {
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

        return next
            .handle(request)
            .pipe(tap((event: HttpEvent<any>) => {
                if (event instanceof HttpResponse && request.url.endsWith('login')) {
                    this.saveToken(event.body)
                }
            }, (err: any) => {
                if (err instanceof HttpErrorResponse) {
                    switch (err.status) {
                        case 401:
                            this.router.navigate(['/register']);
                            break;
                        case 404:
                            this.router.navigate(['/not-found']);
                            break;
                    }
                }
            }));
    }
}
