
import {Http, Headers} from '@angular/http';
import 'rxjs/Rx';
import { Injectable } from '@angular/core';
import { Observable, of, throwError } from 'rxjs';
import { HttpClient, HttpHeaders, HttpErrorResponse } from '@angular/common/http';
import { catchError, tap, map } from 'rxjs/operators';

const PingUserRole = "/user";
const QlikUser = "/QlikUserSync";


const httpOptions = {
  headers: new HttpHeaders({'Content-Type': 'application/json'})
};
@Injectable({
  providedIn: 'root'
})
export class RegisterService {

  constructor(private http:Http) { }
  private handleError(error: HttpErrorResponse) {
    if (error.error instanceof ErrorEvent) {
      // A client-side or network error occurred. Handle it accordingly.
      console.error('An error occurred:', error.error.message);
    } else {
      // The backend returned an unsuccessful response code.
      // The response body may contain clues as to what went wrong,
      console.error(
        `Backend returned code ${error.status}, ` +
        `body was: ${error.error}`);
    }
    // return an observable with a user-facing error message
    return throwError(error);
  };

  private extractData(res: Response) {
    let body = res;
    return body || { };
  }

  // onRegister(body){

  //   const header = new Headers();
  //   header.append("Content-Type","application/json");
  //   return this.http
  //   .post("http://127.0.0.1:4000/register",body,{headers:header})
  //   .map(res=>res.json());
  // }
  // postPingUserDetails(data): Observable<any> {
  //   console.log('i m in',data);
  //   const url ='/user/register';
  //   return this.http.post(url, data, httpOptions)
  //     .pipe(
  //       catchError(this.handleError)
  //     );
  // }
  
  // deletePingUserNew(id: string): Observable<{}> {
  //   const url = `${PingUserRole}/${id}`;
  //   return this.http.delete(url, httpOptions)
  //     .pipe(
  //       catchError(this.handleError)
  //     );
  // }
  // getPingUsersNew(): Observable<any> {  
  //   return this.http.get(PingUserRole, httpOptions).pipe(
  //     map(this.extractData),
  //     catchError(this.handleError));
  // }
  // fetchQlikUsers():Observable<any>{
  //   return this.http.get(QlikUser+'/UserSync',httpOptions).pipe(
  //     catchError(this.handleError)
  //   );
  //   }
  //   getPingUserIDDetails(id: string): Observable<any> {
  //     console.log('in user Role Id Details'+id)
  //     const url = `${PingUserRole}/${id}`;
  //     // console.log(url);
  //     return this.http.get(url, httpOptions)
  //     .pipe(
  //       map(this.extractData, () => {
  //         console.log(this.extractData);
  //       }),
  //       catchError(this.handleError)
  //     );
  //   }
  //   UpdatePingUserRole(id,data): Observable<any> { 
  //     console.log('in Update User ROle') 
  //     const url = `${PingUserRole}/${id}`;
  //   return this.http.put(url, data, httpOptions)
  //   .pipe(
  //   catchError(this.handleError)
  //   );
  // }
}
