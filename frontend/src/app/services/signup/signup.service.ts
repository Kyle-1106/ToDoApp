import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { User } from 'src/app/models/user.model';
import { Observable, catchError, throwError } from 'rxjs';
import { HttpHeaders } from '@angular/common/http';
import { FormGroup } from '@angular/forms';
import { SignupUser } from 'src/app/models/signupUser.model'; 

@Injectable({
  providedIn: 'root'
})

export class SignupService {
  //再入力したパスワードが一致するかバリデーション
  public passwordMatchValidator(formGroup: FormGroup):object{
    const password=formGroup.get("password")?.value;
    const confirmPassword=formGroup.get("confirmPassword")?.value;
    if(password==confirmPassword){
      return {mismatch:false};
    }
    else{
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
  readonly url="http://localhost:3001/user/signup"
  signupUser(formData:SignupUser):Observable<SignupUser>{
    return this.http.post<SignupUser>(this.url,formData,this.httpOptions).pipe(
      catchError((error) => {
        return throwError("入力されたメールアドレスはすでに登録されています")
      })
    );
  }

}
