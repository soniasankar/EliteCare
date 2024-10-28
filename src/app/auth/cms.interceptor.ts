import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor
} from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable()
export class CmsInterceptor implements HttpInterceptor {

  constructor() {}



  intercept(request: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<unknown>> {
    console.log("I am intercepting...");

    // If login, no need to check JWT
    if (request.url.includes('api/logins')) {
      console.log("Not checking JWT for login request");
      // Pass the request as it is if it's a login request
      
    } else {
      const token = localStorage.getItem('JWT_TOKEN');

      // Checking if the token exists
      if (token) {
        // If JWT is present, clone the request and set the Authorization header
        const newRequest = request.clone({
          setHeaders: {
            Authorization: `Bearer ${token}`
          }
        });
        return next.handle(newRequest);
      } else {
        console.warn("No JWT token found, request will be sent without authorization.");
      }
    }

    // If no modifications were made, just pass the request as is
    return next.handle(request);
  }
}