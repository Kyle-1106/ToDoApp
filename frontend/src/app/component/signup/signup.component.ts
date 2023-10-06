import { Component } from '@angular/core';
import { FormBuilder, FormGroup, FormControl,Validators } from '@angular/forms';
import { SignupService } from '../../services/signup/signup.service';
import { SignupUser } from 'src/app/models/signupUser.model';
import { LoginService } from 'src/app/services/login/login.service';
import { Router } from '@angular/router';

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

  constructor(private formBuilder:FormBuilder,private signupservice:SignupService,private loginService:LoginService,private router:Router){
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
    this.signupservice.signupUser(formData).subscribe({
      next: (response) => {
        console.log('POSTリクエスト成功:', response);
        this.loginService.saveToken(response)
        this.router.navigate(["/home"],{queryParams:{email:this.email}});
      },
      error: (error) => {
        console.error('Error creating user:', error);
        this.errorMessage=error;
      },
    });

  }
}
