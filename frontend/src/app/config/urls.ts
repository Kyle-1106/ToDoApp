import { Injectable } from "@angular/core";

@Injectable({
  providedIn: 'root'
})
export class Urls{
  login:string="http://localhost:3001/login";
  signup:string="http://localhost:3001/user/signup";
      
}
