import { Component } from '@angular/core';
import { Workout } from 'src/app/models/workout.model';
import { WorkoutLog } from 'src/app/models/workoutLog.model';
import { RecordWorkoutService } from 'src/app/services/recordWorkout/record-workout.service';

@Component({
  selector: 'app-record',
  templateUrl: './record.component.html',
  styleUrls: ['./record.component.scss']
})
export class RecordComponent {
  workout:Workout;
  userId:number;
  workoutLogs:any;


  constructor(private recordWorkoutService:RecordWorkoutService){}

  ngOnInit(){
    const userIdstring:string|null=localStorage.getItem("id");
    const userId:number=Number(userIdstring);
    console.log(typeof userId);
    this.recordWorkoutService.getWorkout(userId)
    .subscribe({
      next:(response)=>{
        console.log(response);
        this.translate(response);
        this.workoutLogs=response;
      },
      error:(error)=>{
        console.log(error)
      }

    });


  }

  translate(response:any){
    response.forEach((log: { bodyPartName: string; })=>{
      if(log.bodyPartName="chest"){
       log.bodyPartName="胸";
      }
      if(log.bodyPartName="back"){
        log.bodyPartName="背中";
       }
      if(log.bodyPartName="shoulder"){
        log.bodyPartName="肩";
       }
      if(log.bodyPartName="leg"){
        log.bodyPartName="脚";
      }
      if(log.bodyPartName="abs"){
        log.bodyPartName="腹筋";
       }
       if(log.bodyPartName="arm"){
        log.bodyPartName="腕";
       }
    })

  }

  
    
  

}
