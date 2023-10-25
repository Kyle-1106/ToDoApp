import { RecordService } from './../../services/record/record.service';
import { Component } from '@angular/core';
import { Workout } from 'src/app/interfaces/workout.interface';
import { WorkoutLog } from 'src/app/interfaces/workoutLog.interface';
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
  selctedBodyPart:string;
  selectedWorkoutLogs:any;
  showButton:boolean;
  showChart:boolean;


  constructor(
    private recordWorkoutService:RecordWorkoutService,
    private recordService:RecordService){}

  ngOnInit(){
    const userIdstring:string|null=sessionStorage.getItem("id");
    const userId:number=Number(userIdstring);
    this.recordWorkoutService.getWorkout(userId)
    .subscribe({
      next:(response)=>{
        this.translate(response);
        this.workoutLogs=response;
        this.selectedWorkoutLogs=this.workoutLogs;
      },
      error:(error)=>{
        console.log(error);
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
    this.recordService.setShowButton(this.showButton);
    this.showChart=false;
    this.recordService.setShowChart(this.showChart);
  }

  //部位名を翻訳
  translate(response:any){
    response.forEach((log: { bodypart:any,})=>{
      if(log.bodypart.name=="chest"){
        log.bodypart.name="胸";
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
