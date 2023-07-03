import { Injectable, NgModule } from '@angular/core';
import {
  HttpInterceptor,
  HttpHandler,
  HttpRequest,
  HttpHeaders,
} from '@angular/common/http';
import { HTTP_INTERCEPTORS } from '@angular/common/http';
// import { GetTeams, IGetResults } from './interface';
console.log('hellog prindafdpoafdj');

@Injectable()
export class HttpRequestInterceptor implements HttpInterceptor {
  intercept(req: HttpRequest<any>, next: HttpHandler) {
    console.log('hellog prindafdpoafdj');
    const headers = new HttpHeaders().append(
      'x-rapidapi-key',
      'b56899596cd44ac9681e6766f395573e'
    );
    // .append('X-RapidAPI-Host', 'api-football-beta.p.rapidapi.com');
    const cloneReq = req.clone({ headers });
    console.log('firing agohadhaodsh');
    return next.handle(cloneReq);
  }
}

// @NgModule({
//   providers: [
//     {
//       provide: HTTP_INTERCEPTORS,
//       useClass: HttpRequestInterceptor,
//       multi: true,
//     },
//   ],
// })
export class HttpInterceptorModule {}
