import { Injectable } from '@angular/core';
import { Observable, catchError, throwError } from 'rxjs';
import { User } from 'src/app/interfaces/user.interface';
import { HttpOptions } from 'src/app/config/httpOption';
import { Urls } from 'src/app/config/urls';
import { HttpClient } from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class GetUserService {

  constructor(
  private http:HttpClient,
  private httpOption:HttpOptions,
  private urls:Urls) { }
  readonly httpOptions=this.httpOption.httpOptions;
  readonly url:string=this.urls.getUser;

  //ユーザ情報取得
  getUser(email:string):Observable<User>{
    const params={email:email};
    return this.http.get<User>(this.url,{params});
  }


}
