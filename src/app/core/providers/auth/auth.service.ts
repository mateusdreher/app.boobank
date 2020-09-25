import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})

export class AuthService {

  private base_url: string;
  private currentUserSessionSubject: BehaviorSubject<string>;

  constructor(private http: HttpClient) {
    this.base_url = "http://localhost:3333/login";

    this.currentUserSessionSubject = new BehaviorSubject<string>(JSON.parse(sessionStorage.getItem("session_value")));
  }

  public get currentUserSessionValue():string {
    return this.currentUserSessionSubject.value;
  }

  public setCurrentUserSessionValue(session: string): void  {
    sessionStorage.setItem("sesison_value", JSON.stringify(session));
    this.currentUserSessionSubject.next(session);
  }
  
  auth(username: string, password: string):Observable<Object> {
    return this.http.post(this.base_url, { username, password });
  }
}
