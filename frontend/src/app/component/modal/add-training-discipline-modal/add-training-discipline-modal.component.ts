import { Component, Injectable } from '@angular/core';
import { SelectTrainingDisciplineService } from 'src/app/services/selectTrainingDiscipline/select-training-discipline.service';
import { MatDialogRef } from '@angular/material/dialog';
@Component({
  selector: 'app-add-training-discipline-modal',
  templateUrl: './add-training-discipline-modal.component.html',
  styleUrls: ['./add-training-discipline-modal.component.scss']
})
@Injectable({
  providedIn: 'root'
})
export class AddTrainingDisciplineModalComponent {
  discipline:string;

  constructor(
    private selectTrainingDisciplineService:SelectTrainingDisciplineService,
    private dialogRef: MatDialogRef<AddTrainingDisciplineModalComponent>){}
  //種目登録
  registDiscipline(){
    const disciplineName:string=this.discipline;
    const bodyPartIdString:string|null=sessionStorage.getItem("bodyPartId");
    const bodyPartId:number=Number(bodyPartIdString);
    this.selectTrainingDisciplineService.registarTrainingDisciplines(bodyPartId,disciplineName)
    .subscribe({
      next:(response)=>{
        this.dialogRef.close();
      },
      error:(error)=>{
        console.log(error)
      }
    })
  }
  //種目編集


  //種目削除
  
  //モーダル閉じる
  close(){
    this.dialogRef.close();
  }

}
