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
  workoutLogs:WorkoutLog[];


  constructor(private recordWorkoutService:RecordWorkoutService){}

  ngOnInit(){
    const userIdstring:string|null=localStorage.getItem("id");
    const userId:number=Number(userIdstring);
    console.log(typeof userId);
    this.recordWorkoutService.getWorkout(userId)
    .subscribe({
      next:(response)=>{
        console.log(response);
        this.workoutLogs=response;
       
       
      },
      error:(error)=>{
        console.log(error)
      }

    });


  }


}
