import { Component,Input,OnInit, OnChanges, SimpleChanges  } from '@angular/core';
import { Router } from '@angular/router';
import { TrainingDiscipline } from 'src/app/models/trainingDiscipline.model';
import { SelectTrainingDisciplineService } from 'src/app/services/selectTrainingDiscipline/select-training-discipline.service';
import { MatDialog } from '@angular/material/dialog';
import { AddTrainingDisciplineModalComponent } from '../modal/add-training-discipline-modal/add-training-discipline-modal.component';



@Component({
  selector: 'app-select-training-discipline',
  templateUrl: './select-training-discipline.component.html',
  styleUrls: ['./select-training-discipline.component.scss']
})
export class SelectTrainingDisciplineComponent {
  trainingDisciplines:TrainingDiscipline[];
  errorMessage:string;
 
  constructor(private selectTrainingDisciplineService:SelectTrainingDisciplineService,private router:Router,private dialog:MatDialog){
  }                                                                                                                                                                                                                                                                                                                                                                                                                                                                       
  
  ngOnInit(){
    const bodyPartId=Number(localStorage.getItem("bodyPartId"));
    if(!bodyPartId){
    }
    this.getTrainingDisciplines(bodyPartId);
    

  }
  //種目取得
  getTrainingDisciplines(bodyPartId:number){
    this.selectTrainingDisciplineService.getTrainingDisciplines(bodyPartId).subscribe({
      next:(response)=>{
        console.log(response)
       this.trainingDisciplines=response
      
      },
      error:(error)=>{
        console.log(error)
      }
    })
  }
  //種目をローカルストレージへ保存
  saveTrainingDiscipline(discipline:TrainingDiscipline){
    const disciplineId=discipline.id;
    const disciplineName=discipline.name
    const disciplineIdtoString:string=String(disciplineId);
    localStorage.setItem("disciplineId",disciplineIdtoString);
    localStorage.setItem("disciplineName",disciplineName);
    this.router.navigate(["/home/workout/recordWorkout"]);
    
  }

  //モーダルを開く
  openModal(){
    const dialog=this.dialog.open(AddTrainingDisciplineModalComponent);
    //モーダルが閉じたとき
    dialog.afterClosed()
    .subscribe
    (result=>{
      console.log("モーダルが閉じられました")
    })
  }

  

  
}
