import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { SelectBodyPartService } from 'src/app/services/selectBodyPart/select-body-part.service';

@Component({
  selector: 'app-select-bodypart',
  templateUrl: './select-bodypart.component.html',
  styleUrls: ['./select-bodypart.component.scss']
})
export class SelectBodypartComponent {
  bodyPartId:number;
  constructor(private router:Router,private selectBodyPartService:SelectBodyPartService){}
  
  navigateToTrainingDiscipline(bodyPartId:number){
    this.bodyPartId=bodyPartId;
    const bodyPartIdString:string=String(bodyPartId);
    localStorage.setItem("bodyPartId",bodyPartIdString)
    this.router.navigate(["home/workout/selectTrainingDiscipline"]);   
  }
   

}
