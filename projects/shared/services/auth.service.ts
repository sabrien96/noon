import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { User } from '../models/user.model';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  authURL='http://localhost:3000/'
  constructor(private httpClient: HttpClient) {}

  login(authenticate: User): Observable<any> {
    return this.httpClient.post(`${this.authURL}login` , authenticate);
  }
}
