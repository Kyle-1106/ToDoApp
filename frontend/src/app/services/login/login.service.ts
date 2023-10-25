import { Injectable } from '@angular/core';
import { HttpClient} from '@angular/common/http';
import { Login } from 'src/app/interfaces/login.interface';
import { Observable, catchError, throwError } from 'rxjs';
import { Auth } from 'src/app/interfaces/auth.interface';
import { HttpOptions } from 'src/app/config/httpOption';
import { Urls } from 'src/app/config/urls';
import { ErrorMessages } from 'src/app/config/errorMessages';




@Injectable({
  providedIn: 'root'
})
export class LoginService {

  constructor(
    private http:HttpClient,
    private httpoption:HttpOptions,
    private urls:Urls,
    private errorMessages:ErrorMessages) { }

  readonly httpOptions=this.httpoption.httpOptions
  readonly loginURL=this.urls.login;

  //ログイン処理
login(loginForm: Login): Observable<Auth> {
  return this.http.post<Auth>(this.loginURL, loginForm, this.httpOptions)
  .pipe(
    catchError((error) => {
      console.log("エラー:"+error);
      return throwError(this.errorMessages.failedLogin);
    })
  );
}

  
  //ログイン判定
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
