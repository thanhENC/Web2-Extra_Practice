import { HttpClient, HttpErrorResponse, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError, map, Observable, retry, throwError } from 'rxjs';
import { Food } from '../model/Food';

@Injectable({
  providedIn: 'root'
})
export class FoodServiceService {
  constructor(private _http: HttpClient) { }

  // get all foods
  getAllFoods(): Observable<any> {
    const headers = new HttpHeaders().set("Content-Type", "text/plain;charset=utf-8")
    const requestOptions: Object = {
      headers: headers,
      responseType: "text"
    }
    return this._http.get<any>("/api/foods", requestOptions).pipe(
      map(res => JSON.parse(res) as Array<Food>),
      retry(3),
      catchError(this.handleError))
  }

  // get well foods
  getWellFoods(): Observable<any> {
    const headers = new HttpHeaders().set("Content-Type", "text/plain;charset=utf-8")
    const requestOptions: Object = {
      headers: headers,
      responseType: "text"
    }
    return this._http.get<any>("/api/foods/well", requestOptions).pipe(
      map(res => JSON.parse(res) as Array<Food>),
      retry(3),
      catchError(this.handleError))
  }

  handleError(error: HttpErrorResponse) {
    return throwError(() => new Error(error.message))
  }
}
