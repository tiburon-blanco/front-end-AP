import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, pipe, tap } from 'rxjs';
import { Login } from '../model/login.model';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  private apiUrl = 'https://nameless-leaf-2280.fly.dev';
  private token!: string;

  constructor(private http: HttpClient) { }

  postLogin(login: Login): Observable<any> {
    return this.http.post<any>(this.apiUrl + '/out/login', login)
      .pipe(
        tap(res => {
          this.token = res.token;
          localStorage.setItem('token', this.token);
        })
      );
  }

  getAuthHeaders(): HttpHeaders {
    return new HttpHeaders({
      'Authorization': 'Bearer ' + localStorage.getItem('token')
    });
  }

  isLoggedIn(): boolean {
    return !!localStorage.getItem('token');
  }

  logout(): void {
    this.token;
    localStorage.removeItem('token');
  }

}



  


