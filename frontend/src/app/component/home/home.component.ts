import { Component } from '@angular/core';
import { User } from 'src/app/interfaces/user.interface';
import { GetUserService } from 'src/app/services/getUser/get-user.service'
import { ActivatedRoute } from '@angular/router';
import { Observable, throwError } from 'rxjs';



@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent {
  email:string|null;
  name:string|null;
  constructor(private getUserService:GetUserService,private route: ActivatedRoute){
    this.name=sessionStorage.getItem("name");
  }   
}
  





  

