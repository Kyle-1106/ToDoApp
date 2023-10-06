import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { User } from 'src/app/models/user.model';
import { Observable, catchError, throwError } from 'rxjs';
import { HttpHeaders } from '@angular/common/http';
import { FormGroup } from '@angular/forms';
import { SignupUser } from 'src/app/models/signupUser.model'; 
import { HttpOptions } from 'src/app/config/httpOption';
import { Auth } from 'src/app/models/auth.model';

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

  constructor(private http:HttpClient,private httpoption:HttpOptions) { }
  //HeaderOptionの設定
  readonly httpOptions =this.httpoption.httpOptions
  readonly url="http://localhost:3001/user/signup"
  signupUser(formData:SignupUser):Observable<Auth>{
    return this.http.post<Auth>(this.url,formData,this.httpOptions).pipe(
      catchError((error) => {
        return throwError("入力されたメールアドレスはすでに登録されています")
      })
    );
  }

}