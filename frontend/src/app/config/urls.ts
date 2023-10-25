import { Injectable } from "@angular/core";

@Injectable({
  providedIn: 'root'
})
export class Urls{
  login:string="http://localhost:3001/login";
  signup:string="http://localhost:3001/user/signup";
  registarWorkout:string="http://localhost:3001/workout/recordWorkout";
  getWorkout:string="http://localhost:3001/workout/getWorkout";
  getUser:string="http://localhost:3001/user"  
}
