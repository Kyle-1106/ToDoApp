import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { HttpHeaders } from '@angular/common/http';
import { Login } from 'src/app/models/login.model';
import { Observable } from 'rxjs';

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


  login(loginForm:Login):Observable<Login>{
    //ログイン情報送信
    return this.http.post<Login>(this.url,loginForm,this.httpOptions);
  }
}
