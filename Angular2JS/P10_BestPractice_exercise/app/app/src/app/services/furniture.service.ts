import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Observable } from 'rxjs';

import { Furniture } from '../models/furniture.model';
import { SingleFurniture } from "../models/single-furniture.model";

const baseUrl = 'http://localhost:5000/furniture/';
const createEndpoint = baseUrl + 'create';
const getAllEndpoint = baseUrl + 'all';
const detailsEndpoint = baseUrl + 'details/';
const myFurnitureEndpoint = baseUrl + 'mine';
const deleteEndpoint = baseUrl + 'delete/';
const furnitureByIdPoint = baseUrl ;
const editEndpoint = baseUrl + 'edit/';

@Injectable()
export class FurnitureService {
    constructor(private http: HttpClient) { }

    createFurniture(data: Furniture): Observable<Furniture> {
        return this.http.post<Furniture>(createEndpoint, JSON.stringify(data));
    }
    getAllFurniture(): Observable<Array<SingleFurniture>>{
         return this.http.get<SingleFurniture[]>(getAllEndpoint)
    }
    getFurnitureDetails(id: string) : Observable<SingleFurniture>{
        return this.http.get<SingleFurniture>(detailsEndpoint+id)
    }
    getMyFurniture() : Observable<SingleFurniture[]>{
        return this.http.get<SingleFurniture[]>(myFurnitureEndpoint)
    }
    deleteFurniture(id: string) : Observable<SingleFurniture>{
        return this.http.delete<SingleFurniture>(deleteEndpoint + id);
    }

    getFurnitureById(id :string) : Observable<SingleFurniture>{
        return this.http.get<SingleFurniture>(furnitureByIdPoint+id)
    }
    editFurniture(id: string, body):Observable<SingleFurniture>{
        return this.http.put<SingleFurniture>(editEndpoint+id, JSON.stringify(body))
    }
}