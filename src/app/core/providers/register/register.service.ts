import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { User } from '@interfaces/User';
import { UserAddress } from '@interfaces/UserAddress';


@Injectable({
  providedIn: 'root'
})
export class RegisterService {

  private base_url: string;


  constructor(private http: HttpClient) {
    this.base_url = "http://localhost:3333";
  }

  createUser(user: User): Observable<Object> {
    return this.http.post(`${this.base_url}/register`, user);
  }

  saveAddress(address: UserAddress): Observable<Object> {
    return this.http.post(`${this.base_url}/address`, address);
  }
}
