import {Injectable, OnInit} from '@angular/core';
import {HttpClient, HttpErrorResponse, HttpParams} from '@angular/common/http';
import {Observable, throwError} from 'rxjs';
import {map, catchError} from 'rxjs/operators';
import {Core} from '../models/core';

@Injectable({
  providedIn: 'root'
})

export class PhpService {
  coreDataURL = '/data-php';
  core: Core;

  constructor(private http: HttpClient) {}

  getCore(): Observable<Core> {
    console.log('loading data ');
    return this.http.get(this.coreDataURL).pipe(
      map((res) => {
        this.core = res;
        return this.core;
      }), catchError(this.handleError));
  }

  private handleError(error: HttpErrorResponse) {
    console.log(error);
    // return an observable with a user friendly message
    return throwError('Error! something went wrong.');
  }
}
