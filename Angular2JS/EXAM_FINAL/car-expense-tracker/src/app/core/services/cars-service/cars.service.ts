import { Injectable } from '@angular/core'
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { CarModel } from '../../models/cars/car.model';
import { Observable } from 'rxjs';
import { dbDescription } from '../../common/db-description';


const appKey = dbDescription['appKey']   // APP KEY HERE;
const appSecret = dbDescription['appSecret'] // APP SECRET HERE;
const collectionUrl = `https://baas.kinvey.com/appdata/${appKey}/cars`;
const getGarageByUserId = `https://baas.kinvey.com/appdata/${appKey}/garage`;


@Injectable()
export class CarsService {

    constructor(private http: HttpClient) { }

    createCar(car: CarModel) {
        let data = JSON.stringify(car);
        return this.http.post<CarModel>(collectionUrl, data)
    }
    getAllCarsByUserID(userID: string) : Observable<Array<CarModel>>{
        const url = collectionUrl+`?query={"_acl.creator":"${userID}"}`
        return this.http.get<Array<CarModel>>(url)
    }
   

}