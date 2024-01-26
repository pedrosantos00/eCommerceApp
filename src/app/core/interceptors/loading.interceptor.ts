import { BusyService } from './../services/busy.service';
import {
  HttpErrorResponse,
  HttpEvent,
  HttpHandler,
  HttpInterceptor,
  HttpRequest,
} from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, catchError, delay, finalize, throwError } from 'rxjs';

@Injectable()
export class loadingInterceptor implements HttpInterceptor {
  constructor(private busyService : BusyService) {}


  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    this.busyService.busy();
    return next.handle(req).pipe(
      delay(500),
      finalize(() => this.busyService.idle())
    )
  }


  }