import { AuthService } from './../auth/auth.service';
import { Observable } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class TransationsService {

  private base_url: string;

  constructor(private http: HttpClient, private authService: AuthService) {
    this.base_url = "https://api-boobank.herokuapp.com";
  }

  getTransations(): Observable<Object> {
    let headers = new HttpHeaders;

    headers = headers.append('auth', this.authService.currentUserSessionValue['session']);

    return this.http.get(`${this.base_url}/transations`, { headers });
  }

  getBalance(): Observable<Object> {
    let headers = new HttpHeaders();

    headers = headers.append('auth', this.authService.currentUserSessionValue['session']);
    
    return this.http.get(`${this.base_url}/balance`, { headers })
  }
}
