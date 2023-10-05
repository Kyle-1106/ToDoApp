import { Injectable } from '@angular/core';
import { HttpClient, HttpResponse } from '@angular/common/http';
import { HttpHeaders } from '@angular/common/http';
import { Login } from 'src/app/models/login.model';
import { Observable, catchError, throwError } from 'rxjs';
import { Token } from '@angular/compiler';
import { Auth } from 'src/app/models/auth.model';
import { HttpOptions } from 'src/app/config/httpOption';




@Injectable({
  providedIn: 'root'
})
export class LoginService {

  constructor(private http:HttpClient,private httpoption:HttpOptions) { }

  //HeaderOptionの設定
  readonly httpOptions=this.httpoption.httpOptions
  readonly url="http://localhost:3001/login"
//ログイン処理
login(loginForm: Login): Observable<Auth> {
  // ログイン情報を送信
  return this.http.post<Auth>(this.url, loginForm, this.httpOptions).pipe(
    catchError((error) => {
      return throwError('ログインに失敗しました。');
    })
  );
}

  //トークンの保存
  saveToken(response:Auth):void{
    localStorage.setItem("jwt",response.token);
    localStorage.setItem("email",response.email);
  }

  //トークンの取得
  

  //ログイン判別
   islogin():boolean{
    const token=localStorage.getItem("jwt");
    //ログイン時
    if(token){
      return true;
    }
    //ログアウト時
    return false;
  }




}
