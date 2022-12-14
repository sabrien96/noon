import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { User } from '../models/user.model';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  authURL='http://localhost:8000/api/'
  constructor(private httpClient: HttpClient) {}

  login(authenticate: User): Observable<any> {
    return this.httpClient.post(`${this.authURL}authenticate` , authenticate);
  }
  register(authenticate: User): Observable<any> {
    return this.httpClient.post(`http://localhost:8000/api/register` , authenticate);
  }
}
