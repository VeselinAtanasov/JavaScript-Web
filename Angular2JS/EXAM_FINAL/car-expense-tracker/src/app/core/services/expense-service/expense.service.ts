import { Injectable } from '@angular/core'
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Observable } from 'rxjs';
import { dbDescription } from '../../utils/db-config/db-configuration';
import { ExpensesModel } from '../../models/expenses/expenses';


const appKey = dbDescription['appKey']   // APP KEY HERE;
const appSecret = dbDescription['appSecret'] // APP SECRET HERE;
const collectionUrl = `https://baas.kinvey.com/appdata/${appKey}/expenses`;



@Injectable()
export class ExpenseService {

    constructor(private http: HttpClient) { }

    initExpenseForCarId(expenseData : ExpensesModel) {
        let data = JSON.stringify(expenseData);
        return this.http.post<ExpensesModel>(collectionUrl, data)
    }
    getExpensesByCarId(id:string) : Observable<ExpensesModel>{
        //`?query={"_acl.creator":"${userID}"}`
        console.log(id)
        const url = collectionUrl+ `?query={"carId":"${id}"}`
        return this.http.get<ExpensesModel>(url)
    }
}