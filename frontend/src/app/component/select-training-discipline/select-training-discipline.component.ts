import { Component,Input } from '@angular/core';
import { TrainingDiscipline } from 'src/app/models/trainingDiscipline.model';
import { SelectTrainingDisciplineService } from 'src/app/services/selectTrainingDiscipline/select-training-discipline.service';
import { Observable } from 'rxjs';



@Component({
  selector: 'app-select-training-discipline',
  templateUrl: './select-training-discipline.component.html',
  styleUrls: ['./select-training-discipline.component.scss']
})
export class SelectTrainingDisciplineComponent {
  trainingDisciplines:TrainingDiscipline[];
  errorMessage:string;
  @Input() bodyPart:string;
 
  constructor(private selectTrainingDisciplineService:SelectTrainingDisciplineService){
  }                                                                                                                                                                                                                                                                                                                                                                                                                                                                                 
  ngOnChanges(){
    console.log(this.bodyPart)
  }

  
}
