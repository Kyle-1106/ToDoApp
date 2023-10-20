import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-select-bodypart',
  templateUrl: './select-bodypart.component.html',
  styleUrls: ['./select-bodypart.component.scss']
})
export class SelectBodypartComponent {
  bodyPartId:number;
  constructor(
    private router:Router,){}
  
  //部位選択画面遷移
  navigateToTrainingDiscipline(bodyPartId:number){
    this.bodyPartId=bodyPartId;
    const bodyPartIdString:string=String(bodyPartId);
    sessionStorage.setItem("bodyPartId",bodyPartIdString)
    this.router.navigate(["home/workout/selectTrainingDiscipline"]);   
  } 

}
