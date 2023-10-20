import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { User } from 'src/app/models/user.model';
import { Observable, catchError, throwError } from 'rxjs';
import { HttpHeaders } from '@angular/common/http';
import { FormGroup } from '@angular/forms';
import { SignupUser } from 'src/app/models/signupUser.interface'; 
import { HttpOptions } from 'src/app/config/httpOption';
import { Auth } from 'src/app/models/auth.interface';
import { Urls } from 'src/app/config/urls';
import { ErrorMessages } from 'src/app/config/errorMessages';

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

  constructor(
    private http:HttpClient,
    private httpoption:HttpOptions,
    private urls:Urls,
    private errorMessages:ErrorMessages) { }
  //HeaderOptionの設定
  readonly httpOptions =this.httpoption.httpOptions
  readonly url=this.urls.signup;
  signupUser(formData:SignupUser):Observable<Auth>{
    return this.http.post<Auth>(this.url,formData,this.httpOptions)
    .pipe(
      catchError((error) => {
        console.log("エラー:"+error);
        return throwError(this.errorMessages.failedCreateUser);
      })
    );
  }

}
