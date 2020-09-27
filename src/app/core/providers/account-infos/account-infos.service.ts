import { Observable } from 'rxjs';
import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { AuthService } from './../auth/auth.service';

@Injectable({
  providedIn: 'root'
})
export class AccountInfosService {

  private base_url: string

  constructor(private http: HttpClient, private authService: AuthService) {
    this.base_url = "https://api-boobank.herokuapp.com/account";
  }

  get():Observable<Object> {
    let headers = new HttpHeaders;

    headers = headers.append('auth', this.authService.currentUserSessionValue['session']);

    return this.http.get(this.base_url, { headers });
  }
}
