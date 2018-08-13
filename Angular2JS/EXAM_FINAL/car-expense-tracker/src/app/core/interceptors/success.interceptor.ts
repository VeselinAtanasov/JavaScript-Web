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
import { AuthService } from '../services/authentication-service/auth.service';

const appKey = "kid_SkGn5VhSm" // APP KEY HERE;

@Injectable()
export class SuccessInterceptor implements HttpInterceptor {

    constructor(
        private toastr: ToastrService,
        private router: Router,
        private authService: AuthService
    ) { }


    private saveToken(data) {
        localStorage.setItem('currentUser', JSON.stringify({
            username: data['username'],
            token: data['_kmd']['authtoken'],
            lastName: data['lastName'],
            firstName: data['firstName'],
            email: data['email'],
            userId: data['_id']
        }))
        this.authService.importSessionData(localStorage.getItem('currentUser'))
    }

    intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
        return next
            .handle(req)
            .pipe(tap((res: HttpEvent<any>) => {

                console.log(res)
                if (res instanceof HttpResponse && res.ok && res.url.endsWith(appKey)) {
                    this.toastr.success("Successful registration! Please login", "Success: ")
                    this.router.navigate(['/auth/login'])
                } else if (res instanceof HttpResponse && res.ok && res.url.endsWith('login')) {

                    this.saveToken(res['body']);
                    this.toastr.success('Hello, ' + this.authService.getUserName() + " and  Welcome to Car Expense Tracker", "Success:")
                    this.router.navigate(['/home'])
                } else if (res instanceof HttpResponse && res.ok && res.url.endsWith('logout')) {
                    this.toastr.success('GoodBye, ' + this.authService.getUserName() + "!", "Success:")
                    this.authService.eraseSessionData()
                    localStorage.clear();
                  //  this.router.navigate(['/'])
                } else if (res instanceof HttpResponse && res.ok && req.url.endsWith('garage') && res['body'] && res['body']['garageName']) {
                    this.toastr.success('You successfully created your own garage: ' + res['body']['garageName'] + "!", "Success:");
                    this.router.navigate(['/garage/my']);
                } else if (res instanceof HttpResponse && res.ok && req.url.endsWith('cars') && res['statusText'] === "Created") {
                    this.toastr.success('You successfully created car: ' + res['body']['carName'] + "!", "Success:");
                    this.router.navigate(['/garage/my']);
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