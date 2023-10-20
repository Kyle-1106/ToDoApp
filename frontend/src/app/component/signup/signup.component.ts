import { ErrorMessages } from './../../config/errorMessages';
import { Component } from '@angular/core';
import { FormBuilder, FormGroup, FormControl,Validators } from '@angular/forms';
import { SignupService } from '../../services/signup/signup.service';
import { Router } from '@angular/router';
import { JwtService } from 'src/app/services/jwt/jwt.service';


@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.scss']
})
export class SignupComponent {
  signupForm:FormGroup;
  name:FormControl;
  email:FormControl;
  password:FormControl;
  confirmPassword:FormControl;
  errorMessage:string;  

  constructor(
    private formBuilder:FormBuilder,
    private signupservice:SignupService,
    private jwtService:JwtService,
    private router:Router,
    private errorMessages:ErrorMessages){
    //各項目にバリデーション追加
    this.name=new FormControl("",[Validators.required]);
    this.email=new  FormControl("",[Validators.required,Validators.email]);
    this.password=new FormControl("",[Validators.required,Validators.minLength(6)]);
    this.confirmPassword=new FormControl("",[Validators.required]);

    //form全体に対するバリデーションを定義する
    this.signupForm=this.formBuilder.group({
      name:this.name,
      email:this.email,
      password:this.password,
      confirmPassword:this.confirmPassword,
    },
    {//カスタムバリデーション
      validators: this.signupservice.passwordMatchValidator
    })
    this.errorMessage="";
  }

  //新規会員登録
  signupUser(){
    const formData = this.signupForm.value;
    try {
      //入力内容確認
      if(!this.signupForm.value){
        this.errorMessage=this.errorMessages.inputInvalid;
        throw new Error(this.errorMessage);
      }
      this.signupservice.signupUser(formData).subscribe({
        next: (response) => {
          //JWTの保存
          this.jwtService.saveToken(response)
          //ホーム画面への遷移
          this.router.navigate(["/home"]);
        },
        error: (error) => {
          console.error('エラー:', error);
          this.errorMessage=error;
        },
      });
    } catch (error) {
      console.log('エラー:'+this.errorMessage)
    }
    
    

  }
}
