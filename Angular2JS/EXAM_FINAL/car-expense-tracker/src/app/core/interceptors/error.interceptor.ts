import {
    HttpResponse,
    HttpRequest,
    HttpEvent,
    HttpHandler,
    HttpInterceptor,
    HttpErrorResponse
} from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, throwError } from 'rxjs';
import { tap, catchError } from 'rxjs/operators'
import { ToastrService } from 'ngx-toastr';
import { Router } from '@angular/router';

@Injectable()
export class ErrorInterceptor implements HttpInterceptor {

    constructor(private toastr: ToastrService, private router: Router) { }

    intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
        console.log('TokenInterceptor3')
        return next.handle(req).pipe(catchError((err: HttpErrorResponse) => {
            switch (err.status) {
                case 401:
                    this.toastr.error(err.error.message, "Warning!");
                    break;
                case 400:
                    const message = Object.keys(err.error.errors).map(e => err.error.errors[e]).join('\n')
                    this.toastr.error(message, "Error!");
                    break;
                case 404:
                    console.log('Hereeee')
                    this.toastr.error("Not Found", "Error!");
                    break;
            }


            return throwError(err);
        }))
    }

}