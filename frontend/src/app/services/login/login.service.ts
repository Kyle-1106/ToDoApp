import { Injectable } from '@angular/core';
import { HttpClient} from '@angular/common/http';
import { Login } from 'src/app/models/login.model';
import { Observable, catchError, throwError } from 'rxjs';
import { Auth } from 'src/app/models/auth.interface';
import { HttpOptions } from 'src/app/config/httpOption';
import { Urls } from 'src/app/config/urls';




@Injectable({
  providedIn: 'root'
})
export class LoginService {

  constructor(private http:HttpClient,private httpoption:HttpOptions,private urls:Urls) { }

  readonly httpOptions=this.httpoption.httpOptions
  readonly loginURL=this.urls.login;

  //ログイン処理
login(loginForm: Login): Observable<Auth> {
  return this.http.post<Auth>(this.loginURL, loginForm, this.httpOptions).pipe(
    catchError((error) => {
      console.log("エラー:"+error);
      return throwError('ログインに失敗しました。');
    })
  );
}

  
  //ログイン判
   islogin():boolean{
    const token=sessionStorage.getItem("jwt");
    //ログイン時
    if(token){
      return true;
    }
    //ログアウト時
    return false;
  }




}
