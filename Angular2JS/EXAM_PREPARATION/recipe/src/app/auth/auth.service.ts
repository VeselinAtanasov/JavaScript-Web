import { Injectable } from '@angular/core';
import * as firebase from 'firebase';
import { ToastrService } from '../../../node_modules/ngx-toastr';
import { Router } from '@angular/router';

@Injectable()
export class AuthService {
    public token: string;

    constructor(private toastr: ToastrService, private router: Router) {

    }
    signUp(email: string, password: string) {
        firebase
            .auth()
            .createUserWithEmailAndPassword(email, password)
            .then(data => {
                console.log(data)
                this.router.navigate(['/auth/signin'])
                this.toastr.success("Sugned Up!", "Success");
            })
            .catch(err => {
                console.log(err);
                this.toastr.error(err.message, "Warning");
            })
    }
    signIp(email: string, password: string) {
        firebase
            .auth()
            .signInWithEmailAndPassword(email, password)
            .then(data => {
                this.saveToken()
                this.router.navigate(['/recipes/start'])
                this.toastr.success("LoggedIn", "Success");
            })
            .catch(err => {
                console.log(err);
                this.toastr.error("Please verify your credentials", "Warning");
            })
    }
    logout() {
        firebase.auth().signOut().then(resp =>{
            this.router.navigate(['/auth/signin'])
            this.toastr.success("You successfully logged out", "Success");
            this.token = null;
        });

    }

    saveToken() {
        firebase.auth().currentUser.getIdToken().then(currentToken => {
            this.token = currentToken;
        })
    }

    getToken() {
        firebase.auth().currentUser.getIdToken().then(currentToken => {
            this.token = currentToken;
        })
        return this.token
    }

    isAuthenticated(): boolean {
        return this.token != null
    }

}