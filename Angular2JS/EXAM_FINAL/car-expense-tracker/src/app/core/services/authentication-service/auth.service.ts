import { Injectable } from '@angular/core'
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { RegisterModel } from '../../models/auth-models/register.model';
import { LoginModel } from '../../models/auth-models/login-model';
import { JsonpCallbackContext } from '../../../../../node_modules/@angular/common/http/src/jsonp';

const appKey = "kid_SkGn5VhSm" // APP KEY HERE;
const appSecret = "1946192594dc4f1784bbef677ddb5c62" // APP SECRET HERE;
const registerUrl = `https://baas.kinvey.com/user/${appKey}`;
const loginUrl = `https://baas.kinvey.com/user/${appKey}/login`;
const logoutUrl = `https://baas.kinvey.com/user/${appKey}/_logout`;

@Injectable()
export class AuthService {

    private sessionAuthToken: string;
    private sessionData: string
    constructor(private http: HttpClient) {

    }

    register(registerModel: RegisterModel) {
        let user = JSON.stringify(registerModel)
        return this.http.post<RegisterModel>(registerUrl, user)
    }
    login(loginModel: LoginModel) {
        let user = JSON.stringify(loginModel)
        return this.http.post<LoginModel>(loginUrl, user)
    }

    logout() {
        return this.http.post(logoutUrl, {})
    }
    eraseSessionData() {
        this.sessionData = null;
        this.authToken = null
    }

    importSessionData(data: string) {
        let userData = JSON.parse(data);
        this.authToken = userData['token']
        this.sessionData = data;
    }

    getUserName(): string {
        return JSON.parse(this.sessionData)['username']
    }

    get authToken(): string {
        return this.sessionAuthToken;
    }
    set authToken(value: string) {
        this.sessionAuthToken = value
    }
    isAuthenticated() {
        return this.sessionAuthToken != null
    }

}