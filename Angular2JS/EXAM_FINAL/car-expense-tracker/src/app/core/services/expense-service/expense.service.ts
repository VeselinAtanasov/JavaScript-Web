import { Injectable } from '@angular/core'
import { HttpClient, HttpResponse } from "@angular/common/http";
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
        const url = collectionUrl+ `?query={"carId":"${id}"}`
        return this.http.get<ExpensesModel>(url)
    }
    updateExpenseById(id: string, data: ExpensesModel) : Observable<ExpensesModel>{
        const url = collectionUrl+'/'+id
        return this.http.put<ExpensesModel>(url, JSON.stringify(data))
    }
    removeExpenseById(id: string) :any{
        const url = collectionUrl+'/'+id;
        return this.http.delete<any>(url);
    }
    getExpensesByGarageId( garageID: string) :Observable<Array<ExpensesModel>>{
        const url = collectionUrl+ `?query={"garageId":"${garageID}"}`
        return this.http.get<Array<ExpensesModel>>(url)
    }

}