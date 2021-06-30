import {Injectable} from '@angular/core';
import {HttpEvent, HttpHandler, HttpInterceptor, HttpRequest} from '@angular/common/http';

import {Observable} from 'rxjs';

/** Check if token exists
 * if not, add token
 * else, send request through unmodified*/
@Injectable()
export class JwtInterceptor implements HttpInterceptor {
  urlSkips: Array<string>;

  constructor() {
    this.urlSkips = ['https://data.buienradar.nl/2.0/feed/json'];
  }

  intercept(req: HttpRequest<any>,
            next: HttpHandler): Observable<HttpEvent<any>> {

    const idToken = localStorage.getItem('jwttoken');

    // if request is in urlSkips, do nothing
    if (this.isUrlSkip(req.url)) {
      console.log('skipping a request: ' + req.url);
      return next.handle(req);
    }

    if (idToken) {
      const cloned = req.clone({
        headers: req.headers.set('Authorization',
          'Bearer ' + idToken)
      });
      return next.handle(cloned);
    } else {
      console.log('JWT does not exist yet');
      return next.handle(req);
    }
  }

  // check if url is in urlSkips list, return true or false
  private isUrlSkip(url: string): boolean {
    for (const urlSkip in this.urlSkips) {

      if (url === this.urlSkips[urlSkip]) {
        return true;
      }
    }
    return false;
  }
}

