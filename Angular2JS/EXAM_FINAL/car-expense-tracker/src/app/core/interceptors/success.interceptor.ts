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
export class SuccessInterceptor implements HttpInterceptor {

    constructor(private toastr: ToastrService, private router: Router) { }


    private saveToken(data) {
        localStorage.setItem('currentUser', JSON.stringify({
            username: data.user.name,
            token: data.token
        }))
    }


    intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
        console.log('TokenInterceptor2')
        return next
            .handle(req).
            pipe(tap((res: HttpEvent<any>) => {
                if (res instanceof HttpResponse && res.body.token) {
                    this.saveToken(res.body)
                    this.toastr.success(res.body.message, "Success!")
                    this.router.navigate(['/home'])
                } else if (res instanceof HttpResponse && res.body.success && res.url.endsWith('signup')) {
                    this.toastr.success(res.body.message, "Success!")
                    this.router.navigate(['/signin'])
                }else if (res instanceof HttpResponse && res.body.success && res.url.endsWith('signin')) {
                    this.toastr.success(res.body.message, "Success!")
                    this.router.navigate(['/furniture/all'])
                } else if (res instanceof HttpResponse && req.url.endsWith('create')) {
                    this.toastr.success(res.body.message);
                    this.router.navigate(['/furniture/all']);
                } else if (res instanceof HttpResponse && req.url.indexOf('details') !== -1) {
                    if (res.body.message) {
                        this.toastr.error(res.body.message);
                        this.router.navigate(['/all']);
                    }
                } else if (res instanceof HttpResponse && req.url.indexOf('delete') !== -1) {
                    if (res.body.success) {
                        this.toastr.success(res.body.message);
                    } else {
                        this.toastr.error(res.body.message);
                        this.router.navigate(['/myFurniture']);
                    }
                }
            }))
    }

}