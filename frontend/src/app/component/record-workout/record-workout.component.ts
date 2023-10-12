import { Component } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { RecordWorkoutService } from 'src/app/services/recordWorkout/record-workout.service';

@Component({
  selector: 'app-record-workout',
  templateUrl: './record-workout.component.html',
  styleUrls: ['./record-workout.component.scss']
})
export class RecordWorkoutComponent {
  
  trainingDiscipline:string|null;
  workoutForm:FormGroup;
  weight:FormControl;
  reps:FormControl;
  memo:string;
  errorMessage:string;

  constructor(private formBuilder:FormBuilder,private recordWorkoutService:RecordWorkoutService){
    //バリデーション追加
    this.weight=new FormControl("",[Validators.required,Validators.min(1)]);
    this.reps=new FormControl("",[Validators.required,Validators.min(1)]);


    this.workoutForm=this.formBuilder.group({
      weight:this.weight,
      reps:this.reps,
    })

    this.errorMessage=""
  }
  
  ngOnInit(){
    this.trainingDiscipline=localStorage.getItem("discipline");
  }

  recordWorkout(){
    const bodyPart=localStorage.getItem("bodyPart")
    const discipline=localStorage.getItem("discipline")
    const workoutInfo={
      bodyPart:bodyPart,
      discipline:discipline,
      weight:this.weight,
      reps:this.reps,
      memo:this.memo
    }
    //登録処理
    this.recordWorkoutService(workoutInfo);


    localStorage.removeItem("bodyPart")
    localStorage.removeItem("discipline")
    
  }







}
