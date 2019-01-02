import { Injectable } from '@angular/core';
import { Observable, of, throwError } from 'rxjs';
import { HttpClient, HttpHeaders, HttpErrorResponse } from '@angular/common/http';
import { catchError, tap, map } from 'rxjs/operators';


//globle variable 
const PingUserRole = "/user";
const QlikUser = "/QlikUserSync";
const BulkUseradd = "/UploadBulkUser";



const httpOptions = {
  headers: new HttpHeaders({'Content-Type': 'application/json'})
};


@Injectable({
  providedIn: 'root'
})
export class AdminService {
 
  constructor(private http: HttpClient) { }

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

 
 //methods 
  getPingUsers(): Observable<any> {  
        
        return this.http.get(PingUserRole, httpOptions).pipe(
          map(this.extractData),
          catchError(this.handleError));
      }

      //Bulk User Add Api
      postFileUpload(data): Observable<any> {
        console.log("#####Post File upload",data)
        return this.http.post(BulkUseradd, data, httpOptions)
          .pipe(
            catchError(this.handleError)
          );
      }
        //region New  ping User creationb Details

  getPingUsersNew(): Observable<any> {  
    return this.http.get(PingUserRole, httpOptions).pipe(
      map(this.extractData),
      catchError(this.handleError));
  }
  

  //region New  ping User Details Login ID Wise
  getPingUsersLoginIDWise(id:string): Observable<any> { 
    console.log('in service APi',id); 
    const loginURL="/user/LoginIdWise"
    const url = `${loginURL}/${id}`;
    console.log("New URL"+url)
    return this.http.get(url, httpOptions).pipe(
      map(this.extractData),
      catchError(this.handleError));
  }
  
  getPingUserNew(id:string): Observable<any> {
    console.log('+++++',id);
    const url = `${PingUserRole}/${id}`;
    return this.http.get(url, httpOptions).pipe(
      map(this.extractData),
      catchError(this.handleError));
  }
  

  getPingUserIDDetails(id: string): Observable<any> {
    console.log('in user Role Id Details'+id)
    const url = `${PingUserRole}/${id}`;
    // console.log(url);
    return this.http.get(url, httpOptions)
    .pipe(
      map(this.extractData, () => {
        console.log(this.extractData);
      }),
      catchError(this.handleError)
    );
  }
  // UpdatePingUserNew(id,data): Observable<any> {  
  //     // const url = `${PingUserRole}/${id}`;
  //     const url ='/pingUser/register';
  //   return this.http.put(url, data, httpOptions)
  //   .pipe(
  //   catchError(this.handleError)
  //   );
  // }

  postPingUserDetails(data): Observable<any> {
    console.log('i m in',data);
    const url ='/register';
    return this.http.post(url, data, httpOptions)
      .pipe(
        catchError(this.handleError)
      );
  }

  UpdatePingUserRole(id,data): Observable<any> { 
    console.log('in Update User ROle') 
    const url = `${PingUserRole}/${id}`;
  return this.http.put(url, data, httpOptions)
  .pipe(
  catchError(this.handleError)
  );
}

  postPingUserLogin(data): Observable<any> {    
    console.log('In login fuction');
    const url ='/user/login';
    return this.http.post(url, data, httpOptions)
      .pipe(
        catchError(this.handleError)
      );
  }

  pinUserLogout(): Observable<any> {
    console.log('In Logout function');
    const url ='/user/logout';
   
    return this.http.get(url,httpOptions)
      .pipe(
        catchError(this.handleError)
      );
  }

  pingLoginDetails(data): Observable<any> {
    console.log('In pingLoginDetails function');
    const url ='/user/FetchUser';   
    return this.http.get(url,httpOptions)
      .pipe(
        catchError(this.handleError)
      );
  }

  pingVerifyUser(data): Observable<any> {
    console.log('In ping Verify User function');
    console.log(data);
    const httpOptions1 = {
      headers: new HttpHeaders({'x-access-token':data
    })
    };
    const url ='/user/UserVerification';   
    return this.http.get(url,httpOptions1)
      .pipe(
        catchError(this.handleError)
      );
  }


  fetchPingUserDetails(data): Observable<any> {
    console.log('In fetchPingUserDetails function');
    console.log(data);
    const httpOptions1 = {
      headers: new HttpHeaders({'x-access-token':data
    })
    };
    const url ='/UserRole/GetUser';   
    return this.http.get(url,httpOptions)
      .pipe(
        catchError(this.handleError)
      );
  }

  
  deletePingUserNew(id: string): Observable<{}> {
    const url = `${PingUserRole}/${id}`;
    return this.http.delete(url, httpOptions)
      .pipe(
        catchError(this.handleError)
      );
  }
  // deletePingUserNew(id: string): Observable<{}> {
  //   const PingUserRole = "/UserRoleDelete/:id";
  //   const url = `${PingUserRole}/${id}`;
  //   return this.http.delete(url, httpOptions)
  //     .pipe(
  //       catchError(this.handleError)
  //     );
  // }
  
  postPingUserNew(data): Observable<any> {
    return this.http.post(PingUserRole, data, httpOptions)
      .pipe(
        catchError(this.handleError)
      );
  }
  // Total Alert Count
  getUserMaxNew(): Observable<any> {
    return this.http.get(PingUserRole + '/count', httpOptions).pipe(
      map(this.extractData),
      catchError(this.handleError));
  }

  //Add Dynamic Qlik Users 
  fetchQlikUsers():Observable<any>{
  return this.http.get(QlikUser+'/UserSync',httpOptions).pipe(
    catchError(this.handleError)
  );
  }

}