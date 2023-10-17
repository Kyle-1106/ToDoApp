import { Injectable } from '@angular/core';
import { Observable, catchError, throwError } from 'rxjs';
import { User } from 'src/app/models/user.model';
import { HttpClient, HttpResponse } from '@angular/common/http';
import { HttpOptions } from 'src/app/config/httpOption';
@Injectable({
  providedIn: 'root'
})
export class GetUserService {

  constructor(private http:HttpClient,private HttpOption:HttpOptions) { }
  // readonly httpOptions=this.HttpOption.httpOptions;

  getUser(email:string):Observable<User>{
    const url=`http://localhost:3001/user/${email}`
    return this.http.get<User>(url).pipe(
      catchError((error) => {
        return throwError('ユーザの取得に失敗しました。');
      })
    );
  }


}
