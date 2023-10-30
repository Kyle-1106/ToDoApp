import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ErrorMessages } from 'src/app/config/errorMessages';
import { JwtService } from 'src/app/services/jwt/jwt.service';
import { LoginService } from 'src/app/services/login/login.service';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {
  loginForm: FormGroup;
  errorMessage:string;

  constructor(
    private formBuilder: FormBuilder,
    private loginService:LoginService,
    private router:Router,
    private jwtService:JwtService,
    private errorMessages:ErrorMessages) {
    //バリデーション追加
    this.loginForm = this.formBuilder.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(6)]]
    });
    this.errorMessage="";
  }

  ngOnInit(){
    sessionStorage.clear();
  }

//ログイン処理
  onLogin():void{
    const formData = this.loginForm.value;
    try {
      //ログイン情報確認
      if(!this.loginForm.valid){
        this.errorMessage=this.errorMessages.inputInvalid;
        throw new Error(this.errorMessage)
      }
      this.loginService.login(formData).subscribe({
        next: (response) => {
          //JWTの保存
          this.jwtService.saveToken(response);
          //ホーム画面への遷移
          this.router.navigate(["/home"]);
        },
        error: (error) => {
          console.log("エラー:"+error);
          this.errorMessage =this.errorMessages.emailOrPasswordInvalid;
        },
      })
    } catch (error) {
      console.log("エラー:"+this.errorMessage); 
    }
    
  }
  //ログインボタン有効化
  isLoginbuttobValid(){
    return this.loginForm.invalid

  }

}
