import { Component,Input,OnInit, OnChanges, SimpleChanges  } from '@angular/core';
import { Router } from '@angular/router';
import { TrainingDiscipline } from 'src/app/models/trainingDiscipline.model';
import { SelectTrainingDisciplineService } from 'src/app/services/selectTrainingDiscipline/select-training-discipline.service';




@Component({
  selector: 'app-select-training-discipline',
  templateUrl: './select-training-discipline.component.html',
  styleUrls: ['./select-training-discipline.component.scss']
})
export class SelectTrainingDisciplineComponent {
  trainingDisciplines:TrainingDiscipline[];
  errorMessage:string;
 
  constructor(private selectTrainingDisciplineService:SelectTrainingDisciplineService,private router:Router){
  }                                                                                                                                                                                                                                                                                                                                                                                                                                                                       
  
  ngOnInit(){
    const bodyPart=localStorage.getItem("bodyPart");
    if(!bodyPart){
     
    }
    this.getTrainingDisciplines(bodyPart);
    

  }

  getTrainingDisciplines(bodyPart:any){
    this.selectTrainingDisciplineService.getTrainingDisciplines(bodyPart).subscribe({
      next:(response)=>{
        console.log(response)
       this.trainingDisciplines=response
      
      },
      error:(error)=>{
        console.log(error)
      }
    })
  }

  saveTrainingDiscipline(disciplineName:string){
    localStorage.setItem("discipline",disciplineName);
    this.router.navigate(["/home/workout/recordWorkout"]);
    
  }

  

  
}
