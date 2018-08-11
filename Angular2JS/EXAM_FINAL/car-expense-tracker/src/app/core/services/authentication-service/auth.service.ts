import {Injectable} from '@angular/core'
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { LoginModel } from '../../models/auth-models/login-model';
import { RegisterModel } from '../../models/auth-models/register.model';

const appKey = "kid_rJ7GeQnSX" // APP KEY HERE;
const appSecret = "3ecb822cf0d74e9bad4a4eed8f983a32" // APP SECRET HERE;
const registerUrl = `https://baas.kinvey.com/user/${appKey}`;
const loginUrl = `https://baas.kinvey.com/user/${appKey}/login`;
const logoutUrl = `https://baas.kinvey.com/user/${appKey}/_logout`;

@Injectable()
export class AuthService{

    private sessionAuthToken : string;
    public registerModel : RegisterModel;
    public loginModel : LoginModel

    constructor(private http: HttpClient){

    }

    register(registerModel: RegisterModel) {
        console.log('Try to register')
        console.log(registerModel)
        let user = JSON.stringify(registerModel)
        return this.http.post<RegisterModel>(registerUrl, user)
    }

    get authToken() {
        return this.sessionAuthToken;
    }
    set authToken(value: string) {
        this.sessionAuthToken=value
    }
    isAuthenticated() {
        return this.sessionAuthToken || localStorage.getItem('authToken')
    }

}