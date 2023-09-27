import { Component } from '@angular/core';
import { FormBuilder, FormGroup, FormControl,Validators } from '@angular/forms';
import { SignupService } from '../../services/signup.service';
import { SignupUser } from 'src/app/models/signupUser.model';

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

  constructor(private formBuilder:FormBuilder,private signupservice:SignupService){
    //各項目にバリデーション追加
    this.name=new FormControl("",[Validators.required]);
    this.email=new  FormControl("",[Validators.required,Validators.email]);
    this.password=new FormControl("",[Validators.required,Validators.minLength(6)]);
    this.confirmPassword=new FormControl("",[Validators.required]);


    this.signupForm=this.formBuilder.group({
      name:this.name,
      email:this.email,
      password:this.password,
      confirmPassword:this.confirmPassword,
    },
    {//カスタムバリデーション
      validators: this.signupservice.passwordMatchValidator
    })
  }

  //新規会員登録
  signupUser(){
    const formData = this.signupForm.value;
    this.signupservice.signupUser(formData)
    .subscribe(
      (response)=>{
        console.log('POSTリクエスト成功:', response);
      },
      (error) => {
        console.error('Error creating user:', error);
      }
    )

  }
}
