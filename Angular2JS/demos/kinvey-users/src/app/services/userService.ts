import { Injectable } from "@angular/core";
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Observable } from "rxjs";

const appKey = "kid_B1UadEnVQ" // APP KEY HERE;
const appSecret = "d856bfb0d1e44ae5ba534e8328127eea" // APP SECRET HERE;
const masterSecret = "e60e6ef53c68450f951ce8ad9ff5c53a"; //Used for the roles
const registerUrl = `https://baas.kinvey.com/user/${appKey}`;
const roleUrl =`https://baas.kinvey.com/roles/${appKey}`
const loginUrl = `https://baas.kinvey.com/user/${appKey}/login`;
const logoutUrl = `https://baas.kinvey.com/user/${appKey}/_logout`;

const userIdRole=`https://baas.kinvey.com/user/${appKey}/`;
///user/:appKey/:userId/roles

@Injectable()
export class User {
    constructor(private http: HttpClient) { }

    register(user) {
       return this.http
            .post(registerUrl, user, {
                headers: new HttpHeaders({
                'Authorization':  `Basic ${btoa(`${appKey}:${appSecret}`)}`,
                'Content-Type': 'application/json'
                })
            })   
    }

    createRole(user) {
        return this.http
             .post(roleUrl, user, {
                 headers: new HttpHeaders({
                 'Authorization':  `Basic ${btoa(`${appKey}:${masterSecret}`)}`,
                 'Content-Type': 'application/json'
                 })
             })   
     }

     getRole(userId){
         let url =userIdRole+`${userId}/roles`
        return this.http
        .get(url, {
            headers: new HttpHeaders({
            'Authorization':  `Basic ${btoa(`${appKey}:${masterSecret}`)}`,
            'Content-Type': 'application/json'
            })
        })  
     }

     login(user){
        return this.http
        .post(loginUrl, user, {
            headers: new HttpHeaders({
            'Authorization':  `Basic ${btoa(`${appKey}:${appSecret}`)}`,
            'Content-Type': 'application/json'
            })
        })  
     }

}