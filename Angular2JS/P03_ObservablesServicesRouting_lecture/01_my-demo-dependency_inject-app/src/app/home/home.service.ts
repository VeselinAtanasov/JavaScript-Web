import { Injectable } from "../../../node_modules/@angular/core";

//I have to import the Injectable, but also VERY IMPORTANT to register HomeService in the provider array in the app.module.ts
@Injectable()
export class HomeService {
    getData(){
        return 'Hello from the service....'
    }
}