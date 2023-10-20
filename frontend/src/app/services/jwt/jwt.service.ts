import { Injectable } from '@angular/core';
import { Auth } from 'src/app/models/auth.interface';

@Injectable({
  providedIn: 'root'
})
export class JwtService {

  constructor() { }

  //JWTの保存
  saveToken(response:Auth):void{
    const idString=String(response.userId);
    sessionStorage.setItem("id",idString);
    sessionStorage.setItem("name",response.name);
    sessionStorage.setItem("jwt",response.token);
    sessionStorage.setItem("email",response.email);
  }
}
