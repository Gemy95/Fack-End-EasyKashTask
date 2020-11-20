import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Transaction } from '../view-models/transaction';
import { Observable } from 'rxjs';
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})

export class TransactionService {
  constructor(private httpClient:HttpClient) {
  }

getUserTransaction(per_page:number,page:number,seller_id:number):Observable<any>
{
  return this.httpClient.get(`${environment.API_URL}/transaction?per_page=${per_page}&page=${page}&seller_id=${seller_id}`);
}

}
