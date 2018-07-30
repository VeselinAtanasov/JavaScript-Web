import { Injectable } from "@angular/core";
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Observable } from "rxjs";

const appKey = "kid_B1UadEnVQ" // APP KEY HERE;
const appSecret = "d856bfb0d1e44ae5ba534e8328127eea" // APP SECRET HERE;
const masterSecret = "e60e6ef53c68450f951ce8ad9ff5c53a"; //Used for the roles
const BASE_URL = 'https://baas.kinvey.com';

@Injectable()
export class TestService {

    constructor(private http : HttpClient){ }

    createData(){
        const url = BASE_URL+'/appdata/kid_B1UadEnVQ/books'  // https://baas.kinvey.com/appdata/kid_B1UadEnVQ/books;
        let userData ={"title":"Hi there", "author": "Veselin"}
        return this.http
        .post(url,userData, {
            headers: new HttpHeaders({
            'Authorization':  `Kinvey `+localStorage.getItem('auth'),
            'Content-Type': 'application/json'
            })
        }) 
    }
}