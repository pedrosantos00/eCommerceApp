import { HttpEvent, HttpHandler, HttpInterceptor, HttpInterceptorFn, HttpRequest } from '@angular/common/http';

import { Injectable } from '@angular/core';
import { Observable, catchError, delay, finalize, take, throwError } from 'rxjs';
import { AccountService } from '../../account/account.service';

@Injectable()
export class JwtInterceptor implements HttpInterceptor {
  token? : string;
  constructor(private accountService: AccountService) {}


  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    this.accountService.currentUser$.pipe(take(1)).subscribe({
      next: user => this.token = user?.token
    })

    if(this.token){
      req = req.clone({
        setHeaders: {
          Authorization: `Bearer ${this.token}`
        }
      })
    }
    return next.handle(req);
  }



  }
