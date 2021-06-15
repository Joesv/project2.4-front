import { Injectable } from '@angular/core';
import {
  HttpEvent, HttpInterceptor, HttpHandler, HttpRequest
} from '@angular/common/http';

import { Observable } from 'rxjs';

/** Check if token exists
 * if not, add token
 * else, send request through unmodified*/
@Injectable()
export class JwtInterceptor implements HttpInterceptor {

  intercept(req: HttpRequest<any>,
            next: HttpHandler): Observable<HttpEvent<any>> {

    const idToken = localStorage.getItem('jwttoken');

    if (idToken) {
      const cloned = req.clone({
        headers: req.headers.set('Authorization',
          'Bearer ' + idToken)
      });
      console.log('adding JWT to HTTP');
      return next.handle(cloned);
    }
    else {
      console.log('JWT does not exist yet');
      return next.handle(req);
    }
  }
}
