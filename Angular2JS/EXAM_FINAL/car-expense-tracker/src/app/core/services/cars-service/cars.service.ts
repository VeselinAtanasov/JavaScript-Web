import { Injectable } from '@angular/core'
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { CarModel } from '../../models/cars/car.model';


const appKey = "kid_SkGn5VhSm" // APP KEY HERE;
const appSecret = "1946192594dc4f1784bbef677ddb5c62" // APP SECRET HERE;
const collectionUrl = `https://baas.kinvey.com/appdata/${appKey}/cars`;
const getGarageByUserId = `https://baas.kinvey.com/appdata/${appKey}/garage`;


@Injectable()
export class CarsService {

    constructor(private http: HttpClient) { }

    createCar(car: CarModel) {
        let data = JSON.stringify(car);

        return this.http.post<CarModel>(collectionUrl, data)
    }
   

}