import { Component, Injectable } from '@angular/core';
import { SelectTrainingDisciplineService } from 'src/app/services/selectTrainingDiscipline/select-training-discipline.service';

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

  constructor(private selectTrainingDisciplineService:SelectTrainingDisciplineService){}
  //種目登録
  registDiscipline(){
    const disciplineName:string=this.discipline;
    const bodyPartIdString:string|null=localStorage.getItem("bodyPartId");
    const bodyPartId:number=Number(bodyPartIdString);
    this.selectTrainingDisciplineService.registarTrainingDisciplines(bodyPartId,disciplineName)
    .subscribe({
      next:(response)=>{
        console.log(response)
      },
      error:(error)=>{
        console.log(error)
      }
    })
  }

}
