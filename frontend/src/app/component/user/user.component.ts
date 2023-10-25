import { Component } from '@angular/core';
import { User } from 'src/app/interfaces/user.interface';
import { GetUserService } from 'src/app/services/getUser/get-user.service';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.scss']
})
export class UserComponent {
  user:any;

  constructor(private userService:GetUserService){}

  ngOnInit(){
    const email:string|null=sessionStorage.getItem("email");
    if(email==null){
      return
    }
    this.userService.getUser(email).subscribe({
      next:(response)=>{
        this.user=response;
        console.log(this.user);
      },
      error:(error)=>{
        console.log(error);
      }
    })
  }

}
