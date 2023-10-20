import { NgIf } from '@angular/common';
import { Component, Input } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent {
  
  name:string="";
  constructor(private router:Router){}

  ngOnInit(){
    const userName:string|null=sessionStorage.getItem("name");
    if(userName==null){
      return 
    }
    this.name=userName;
  
  }
  //ログアウト処理
  logout(){
    sessionStorage.clear();
    this.router.navigate(["/login"]);
  }

}
