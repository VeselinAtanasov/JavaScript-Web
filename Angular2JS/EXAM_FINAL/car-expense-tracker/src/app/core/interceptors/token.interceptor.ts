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

const appKey = "kid_rJ7GeQnSX";
const appSecret = "3ecb822cf0d74e9bad4a4eed8f983a32"

@Injectable()
export class TokenInterceptor implements HttpInterceptor {
    constructor(private toastr: ToastrService, private router: Router) { }

    intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
        // console.log('TokenInterceptor')
        // console.log(request.url)
        let currentUser = JSON.parse(localStorage.getItem('currentUser'));
       // console.log(currentUser)
        if (!currentUser || !currentUser.token) {
            request = request.clone({
                setHeaders: {
                    'Authorization': `Basic ${btoa(`${appKey}:${appSecret}`)}`,
                    'Content-Type': 'application/json'
                }
            })
        } else {
            request = request.clone({
                setHeaders: {
                    'Authorization': `Kinvey ${currentUser.token}`,
                    'Content-Type': 'application/json'
                }
            })
        }
        return next.handle(request)
    }
}