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
import {  Router } from '@angular/router';

@Injectable()
export class ErrorInterceptor implements HttpInterceptor {

    constructor(private toastr :ToastrService, private router : Router){}

    intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {

        return next.handle(req).pipe(catchError((err: HttpErrorResponse) => {
            switch (err.status) {
                case 401:
                this.toastr.error(err.error.message, "Warning!");
                    break;
                case 400:
                console.log(err)
                this.toastr.error(err.error.message, "Error!");
                    break;
            }


            return  throwError(err);
        }))
    }

}