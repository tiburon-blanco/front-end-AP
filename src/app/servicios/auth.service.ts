import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { catchError, Observable, pipe, tap, throwError } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private apiUrl = 'http://52.14.161.48:8080/';
  private token!: string;

  constructor(private http: HttpClient) { }

  login(email: String, password: String): Observable<any> {
    let body = { email: email, password: password};

    return this.http.post<any>(this.apiUrl + '/auth/login', body)
      .pipe(tap(res => {
        console.log("body");
          this.token = res.token;
          localStorage.setItem('token', this.token);
          return true;
        }),
        catchError((error) => {
          console.log(error);
          return throwError(() => error);
        })
    );
  }

  getAuthHeaders(): HttpHeaders {
    return new HttpHeaders({
      'Authorization': 'Bearer ' + localStorage.getItem('token')
    });
  }


  getToken(): String {
    return localStorage.getItem('token')!;
  }

  isLoggedIn(): boolean {
    return !!localStorage.getItem('token');
  }

  logout(): void {
    this.token;
    localStorage.removeItem('token');
  }

}



  


