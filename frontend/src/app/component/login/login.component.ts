import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { throwError } from 'rxjs';
import { Login } from 'src/app/models/login.model';
import { User } from 'src/app/models/user.model';
import { LoginService } from 'src/app/services/login/login.service';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {
  loginForm: FormGroup;
  errorMessage:string;
  constructor(private formBuilder: FormBuilder,private loginService:LoginService,private router:Router) {
    //バリデーション追加
    this.loginForm = this.formBuilder.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(6)]]
    });
    this.errorMessage=""
  }
//ログイン処理
  onLogin():void{
    if (this.loginForm.valid) {
      //フォームが有効な場合、ここで送信処理を実行
      const formData = this.loginForm.value;
      this.loginService.login(formData).subscribe({
        next: (response) => {
          console.log("response")
          console.log(response)
          //JWTの保存
          this.loginService.saveToken(response);
          //ホーム画面への遷移
          const email=localStorage.getItem("email")
          this.router.navigate(["/home"],{queryParams:{email:email}});
        },
        error: (error) => {
          console.error('Error login:', error);
          this.errorMessage ="メールアドレスかパスワードが間違っています"; 
        },
      })
    }
  }

}
