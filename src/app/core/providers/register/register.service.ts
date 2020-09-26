import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { IUser } from '@interfaces/IUser';
import { IUserAddress } from '@interfaces/IUserAddress';


@Injectable({
  providedIn: 'root'
})
export class RegisterService {

  private base_url: string;


  constructor(private http: HttpClient) {
    this.base_url = "http://localhost:3333";
  }

  createUser(user: IUser): Observable<Object> {
    return this.http.post(`${this.base_url}/register`, user);
  }

  saveAddress(address: IUserAddress): Observable<Object> {
    return this.http.post(`${this.base_url}/address`, address);
  }

  verifyUsername(username: string): Observable<Object> {
    return this.http.get(`${this.base_url}/register?username=${username}`);
  }
}
