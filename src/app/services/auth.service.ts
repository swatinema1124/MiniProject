import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private _http: HttpClient) { }

  async signUp(body){
    return this._http.post(`${environment.apiUrl}/user/signup`, body)
  }
  async signIn(body){
    return this._http.post(`${environment.apiUrl}/user/signin`, body)
  }

}
