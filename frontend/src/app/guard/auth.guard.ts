import { inject } from '@angular/core';
import {ActivatedRouteSnapshot, CanActivateFn, Router, RouterStateSnapshot } from '@angular/router';
import { LoginService } from '../services/login/login.service';
import { Injectable } from '@angular/core';
@Injectable({
  providedIn: 'root'
})
class AuthGuard{
  constructor(private router:Router,private loginService:LoginService){}

  canActivate(next:ActivatedRouteSnapshot,state:RouterStateSnapshot):boolean{
    //ログイン時
    const isLogin=this.loginService.islogin();
    if(isLogin){
      return true;
    }
    //ログアウト時
    this.router.navigate(["/login"])
    return false;
  }
}



export const authGuard: CanActivateFn = (next:ActivatedRouteSnapshot,state:RouterStateSnapshot):boolean => {
  return inject(AuthGuard).canActivate(next,state)
}
