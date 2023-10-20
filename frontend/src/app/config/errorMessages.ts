import { Injectable } from "@angular/core";

@Injectable({
  providedIn: 'root'
})

export class ErrorMessages{

  
  inputInvalid:string="入力情報が有効ではありません";
  emailOrPasswordInvalid:string="メールアドレス、もしくはパスワードが間違っています";
  failedLogin="ログインに失敗しました。"
  failedCreateUser="会員登録に失敗しました"
}