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
    this.base_url = "https://api-boobank.herokuapp.com/register";
  }

  createUser(user: IUser): Observable<Object> {
    return this.http.post(this.base_url, user);
  }

  verifyUsername(username: string): Observable<Object> {
    return this.http.get(`${this.base_url}?username=${username}`);
  }
}
