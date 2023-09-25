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
  
  showPassword: boolean = false;

  constructor(private formBuilder:FormBuilder){
    this.name=new FormControl("",[Validators.required]);
    this.email=new  FormControl("",[Validators.required,Validators.email]);
    this.password=new FormControl("",[Validators.required,Validators.minLength(6)]);
    this.confirmPassword=new FormControl("",[Validators.required]);


    this.signupForm=this.formBuilder.group({
      name:this.name,
      email:this.email,
      password:this.password,
      confirmPassword:this.confirmPassword,
    },{
      validators: this.passwordMatchValidator 
    })
  }

  private passwordMatchValidator(formGroup: FormGroup) {
    const password=formGroup.get("password")?.value;
    const confirmPassword=formGroup.get("confirmPassword")?.value;
    console.log("password")
    console.log(password)
    console.log("confirmPassword")
    console.log(confirmPassword)
    
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
