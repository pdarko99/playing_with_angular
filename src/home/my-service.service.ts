import { HttpClient, HttpErrorResponse, HttpHeaders, HttpParams } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { catchError, Observable, throwError } from 'rxjs';

@Injectable()
export class MyServiceService {
  url = 'https://v3.football.api-sports.io/teams?league=39&season=2022';

  http = inject(HttpClient);

  getTeams(): Observable<any> {
    console.log("am being fired 1")
    const headers = new HttpHeaders()
      .set('x-rapidapi-key', '1828b9db08a99c9075e1fe2aed7d5bc1')
    return this.http.get<any>(this.url, { headers }).pipe(catchError(this.handleError));
  }


  getLastSix(id: number|string): Observable<any> {
    let params = new HttpParams();
    params = params.append('team', id);
    params = params.append('last', 6);
    const headers = new HttpHeaders()
      .set('x-rapidapi-key', '1828b9db08a99c9075e1fe2aed7d5bc1')
    return this.http
      .get<any>(`https://v3.football.api-sports.io/fixtures`, {
        params,
        headers
      })
      .pipe(catchError(this.handleError));
  }

  handleError(err: HttpErrorResponse) {
    let message = '';

    if (err.error instanceof ErrorEvent) {
      message = `an error occured: ${err.error.message}`;
    } else {
      message = err.error;
    }
    // return throwError(() => new Error(message))
    return throwError(() => message)

    // return throwError(message)
  }

}