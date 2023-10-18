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
  selctedBodyPart:string;
  selectedBodypart:any;
  selectedWorkoutLogs:any;
  showButton:boolean;


  constructor(private recordWorkoutService:RecordWorkoutService){}

  ngOnInit(){
    const userIdstring:string|null=localStorage.getItem("id");
    const userId:number=Number(userIdstring);
    this.recordWorkoutService.getWorkout(userId)
    .subscribe({
      next:(response)=>{
        this.translate(response);
        this.workoutLogs=response;
        this.selectedWorkoutLogs=this.workoutLogs;
       
      },
      error:(error)=>{
        console.log(error)
      }
    });


  }

  //選択部位で検索処理
  sortbyBodyPart(){
    const bodyPart=this.selctedBodyPart;
    const filterd=this.workoutLogs.filter((item:any)=>{
      return item.bodypart.name==bodyPart;
    })
    this.selectedWorkoutLogs=filterd;
    this.showButton=true;
  }

  //部位名を翻訳
  translate(response:any){
    response.forEach((log: { bodypart:any,})=>{
      if(log.bodypart.name=="chest"){
        console.log(log.bodypart.name)
       log.bodypart.name="胸";
       console.log(log.bodypart.name)
      }
      if(log.bodypart.name=="back"){
        log.bodypart.name="背中";
       }
      if(log.bodypart.name=="shoulder"){
        log.bodypart.name="肩";
       }
      if(log.bodypart.name=="leg"){
        log.bodypart.name="脚";
      }
      if(log.bodypart.name=="abs"){
        log.bodypart.name=="腹筋";
       }
      if(log.bodypart.name=="arm"){
        log.bodypart.name="腕";
      }
    })
    return response;

  }

  
    
  

}
