import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { User } from '../models/user.model';
import { Observable, catchError, tap } from 'rxjs';
import { HttpHeaders } from '@angular/common/http';
import { FormGroup } from '@angular/forms';
import { SignupUser } from '../models/signupUser.model'; 

@Injectable({
  providedIn: 'root'
})

export class SignupService {
  //再入力したパスワードが一致するかバリデーション
  public passwordMatchValidator(formGroup: FormGroup){
    const password=formGroup.get("password")?.value;
    const confirmPassword=formGroup.get("confirmPassword")?.value;

    if(password==confirmPassword){
      return null;
    }
    else{
      console.log({ mismatch: true })
      return { mismatch: true };
    }
  }

  constructor(private http:HttpClient) { }
  //HeaderOptionの設定
  readonly httpOptions = {
    headers: new HttpHeaders({
      'Content-Type':  'application/json',
      Authorization: 'my-auth-token'
    })
  }
  readonly url="http://localhost:3001/api"
    
  signupUser(formData:SignupUser):Observable<SignupUser>{
    console.log("成功")
    console.log(formData)
    console.log(typeof(this.http.post<SignupUser>(this.url,formData,this.httpOptions)))
    return this.http.post<SignupUser>(this.url,formData,this.httpOptions)
    .pipe(
      tap((newsignupuser:SignupUser)=>console.log(newsignupuser))
    );
  }

}
