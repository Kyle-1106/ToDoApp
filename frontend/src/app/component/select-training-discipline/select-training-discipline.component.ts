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
    const bodyPartId=Number(sessionStorage.getItem("bodyPartId"));
    if(!bodyPartId){
    }
    this.getTrainingDisciplines(bodyPartId);
  }

  //種目取得
  getTrainingDisciplines(bodyPartId:number){
    this.selectTrainingDisciplineService.getTrainingDisciplines(bodyPartId).subscribe({
      next:(response)=>{
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
    sessionStorage.setItem("disciplineId",disciplineIdtoString);
    sessionStorage.setItem("disciplineName",disciplineName);
    this.router.navigate(["/home/workout/recordWorkout"]);
    
  }

  //モーダルを開く
  openModal(){
    const dialog=this.dialog.open(AddTrainingDisciplineModalComponent,{
      width: '300px',
      height: '200px',
      disableClose: true,   // モーダルの外側をクリックして閉じるのを無効化
      autoFocus: true,      // モーダルが表示されたときに自動的にフォーカスを設定
      backdropClass: 'custom-backdrop', // バックドロップ（モーダルの背後）に適用するCSSクラス
      panelClass: 'custom-modal'     
    });
    //モーダルが閉じたとき
    dialog.afterClosed()
    .subscribe
    (result=>{
      const bodyPartId=Number(sessionStorage.getItem("bodyPartId"));
    this.getTrainingDisciplines(bodyPartId);
    })
  }

  

  
}
