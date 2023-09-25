import { Component } from '@angular/core';
import { FormBuilder, FormGroup, FormControl,Validators } from '@angular/forms';

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

  constructor(private formBuilder:FormBuilder){
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
      validators: this.passwordMatchValidator 
    })
  }

  
  //再入力パスワード比較処理
  private passwordMatchValidator(formGroup: FormGroup) {
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

  public sendData(){
    console.log(this.name.value);
    console.log(this.email.value);
  }



}
