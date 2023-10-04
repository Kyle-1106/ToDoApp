import { Injectable } from '@angular/core';
import { HttpClient, HttpResponse } from '@angular/common/http';
import { HttpHeaders } from '@angular/common/http';
import { Login } from 'src/app/models/login.model';
import { Observable } from 'rxjs';
import { Token } from '@angular/compiler';
import { Auth } from 'src/app/models/auth.model';


@Injectable({
  providedIn: 'root'
})
export class LoginService {

  constructor(private http:HttpClient) { }
  //HeaderOptionの設定
  readonly httpOptions = {
    headers: new HttpHeaders({
      'Content-Type':  'application/json',
      Authorization: 'my-auth-token'
    })
  }
  readonly url="http://localhost:3001/login"

//ログイン処理
  login(loginForm:Login):Observable<Auth>{
    //ログイン情報送信
    return this.http.post<Auth>(this.url,loginForm,this.httpOptions);
  }

  //トークンの保存
  storeToken(response:Auth):void{
    localStorage.setItem("jwt",response.token);
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
