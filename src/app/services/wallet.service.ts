import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class WalletService {

  constructor(private _http: HttpClient) { }


  async getMyBalance(){
    return this._http.get(`${environment.apiUrl}/txn/get-balance/${sessionStorage.getItem('publicKey')}`)
  }
  async getAllTransactions(){
    return this._http.get(`${environment.apiUrl}/txn/all-transactions`)
  }
  async transferCoins(body){
    return this._http.post(`${environment.apiUrl}/txn/transfer`, body)
  }

  async getMyTransactions(){
    return this._http.get(`${environment.apiUrl}/txn/get-transactions/${sessionStorage.getItem('publicKey')}`)
  }

}
