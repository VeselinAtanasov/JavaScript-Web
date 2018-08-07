import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Observable } from 'rxjs';

import { Furniture } from '../models/furniture.model';

const baseUrl = 'http://localhost:5000/furniture/';
const createEndpoint = baseUrl + 'create';
const getAllEndpoint = baseUrl + 'all';
const detailsEndpoint = baseUrl + 'details/';
const myFurnitureEndpoint = baseUrl + 'mine';
const deleteEndpoint = baseUrl + 'delete/';
const editEndpoint = baseUrl + 'edit/';

@Injectable()
export class FurnitureService {
    constructor(private http: HttpClient) { }

    create(data: Furniture): Observable<Furniture> {
        return this.http.post<Furniture>(createEndpoint, JSON.stringify(data));
      }
}