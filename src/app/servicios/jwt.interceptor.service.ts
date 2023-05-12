import {
    HttpEvent,
    HttpInterceptor,
    HttpHandler,
    HttpRequest,
  } from '@angular/common/http';
  import { Observable } from 'rxjs';
  import { Injectable } from '@angular/core';
import { AuthService } from './auth.service';
  
  
  @Injectable()
  export class JwtInterceptor implements HttpInterceptor {

    constructor(public authService: AuthService) { }

    intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
        const auth = '/auth/login';
        if (req.url.search(auth) === -1 && req.method != 'GET') {
          let token = this.authService.getToken();
          req = req.clone({ headers: req.headers.append('Authorization', `Bearer ${token}`) });
        }
        return next.handle(req);
    }
  }