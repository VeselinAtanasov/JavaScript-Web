import { Injectable } from "@angular/core";
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { LoginModel } from "../models.ts/login-model";
import { RegisterModel } from "../models.ts/register-model";

const appKey = "kid_Sk3nscpNX" // APP KEY HERE;
const appSecret = "97d3910edce14cbaa493c647297612f7" // APP SECRET HERE;
const registerUrl = `https://baas.kinvey.com/user/${appKey}`;
const loginUrl = `https://baas.kinvey.com/user/${appKey}/login`;
const logoutUrl = `https://baas.kinvey.com/user/${appKey}/_logout`;

@Injectable()
export class UserAdministration {

    private currentAuthToken: string;
    constructor(private http: HttpClient) { }

    private createHttpHeaders(type: string): HttpHeaders {
        if (type === 'Basic') {
            return new HttpHeaders({
                'Authorization': `Basic ${btoa(`${appKey}:${appSecret}`)}`,
                'Content-Type': 'application/json'
            })
        } else {
            return new HttpHeaders({
                'Authorization': `Kinvey ${localStorage.getItem('authToken')}`,
                'Content-Type': 'application/json'
            })
        }
    }

    get authToken() {
        return this.currentAuthToken;
    }
    getUsername(): string {
        return localStorage.getItem('username');
    }
    set authToken(value: string) {
        this.currentAuthToken = value;
    }
    checkIfLoggedIn() {
        return this.currentAuthToken || localStorage.getItem('authToken')
    }

    getAuthtoken(): string {
        return localStorage.getItem('authToken');
    }


    getUserId(): string {
        return localStorage.getItem('userId');
    }

    isLogged(): boolean {
        return this.getAuthtoken() !== null;
    }

    register(registerModel: RegisterModel) {
        let user = JSON.stringify(registerModel)
        console.log('...from service:')
        console.log(user)
        return this.http.post<RegisterModel>(registerUrl, user, {
            headers: this.createHttpHeaders('Basic')
        })
    }

    login(loginModel: LoginModel) {
        let user = JSON.stringify(loginModel)
        return this.http.post(loginUrl, user, {
            headers: this.createHttpHeaders('Basic')
        })
    }
    logout() {
        return this.http.post(logoutUrl, {}, {
            headers: this.createHttpHeaders('Kinvey')
        })
    }
}