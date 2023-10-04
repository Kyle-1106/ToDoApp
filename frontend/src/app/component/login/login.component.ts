import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { LoginService } from 'src/app/services/login/login.service';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {
  loginForm: FormGroup;

  constructor(private formBuilder: FormBuilder,private loginService:LoginService) {
    //バリデーション追加
    this.loginForm = this.formBuilder.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(6)]]
    });
  }

  onLogin() {
    if (this.loginForm.valid) {
      // フォームが有効な場合、ここで送信処理を実行
      const formData = this.loginForm.value;
      console.log('メールアドレス:', formData.email);
      console.log('パスワード:', formData.password);
      this.loginService.login(formData).subscribe({
        next: (response) => {
          console.log('POSTリクエスト成功:', response);
          //トークンの保存
          this.loginService.storeToken(response);
         

        },
        error: (error) => {
          console.error('Error creating user:', error);
        },
      })
    }
  }

}
