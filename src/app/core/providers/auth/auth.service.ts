import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})

export class AuthService {

  private base_url: string;
  public currentUserSessionSubject: BehaviorSubject<any>;

  constructor(private http: HttpClient) {
    this.base_url = "https://api-boobank.herokuapp.com/login";

    this.currentUserSessionSubject = new BehaviorSubject<any>({session: JSON.parse(sessionStorage.getItem("session_value")), expired: false});
  }

  public get currentUserSessionValue():string {
    return this.currentUserSessionSubject.value;
  }

  public setCurrentUserSessionValue(session: string, expired: boolean): void  {
    sessionStorage.setItem("session_value", JSON.stringify(session));
    this.currentUserSessionSubject.next( {  session, expired } );
  }
  
  auth(username: string, password: string):Observable<Object> {
    return this.http.post(this.base_url, { username, password });
  }
}
