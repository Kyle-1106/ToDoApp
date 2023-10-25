import { Component } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Workout, workoutInfo } from 'src/app/models/workout.model';
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
  memo:FormControl;
  errorMessage:string;

  constructor(private formBuilder:FormBuilder,private recordWorkoutService:RecordWorkoutService,private router:Router){
    //バリデーション追加
    this.weight=new FormControl("",[Validators.required,Validators.min(1)]);
    this.reps=new FormControl("",[Validators.required,Validators.min(1)]);
    this.memo=new FormControl("");


    this.workoutForm=this.formBuilder.group({
      weight:this.weight,
      reps:this.reps,
      memo:this.memo
    })

    this.errorMessage=""
  }
  
  ngOnInit(){
    this.trainingDiscipline=sessionStorage.getItem("disciplineName");
  }
//ワークアウト登録処理
  recordWorkout(){
    const formData=this.workoutForm.value;
    const userIdString:string|null=sessionStorage.getItem("id");
    const userId:number=Number(userIdString);
    const bodyPartIdString=sessionStorage.getItem("bodyPartId")
    const bodyPartId:number=Number(bodyPartIdString);
    const disciplineIdString=sessionStorage.getItem("disciplineId");
    const disciplineId=Number(disciplineIdString);

    const workoutInfo:workoutInfo={
      userId:userId,
      bodyPartId:bodyPartId,
      disciplineId:disciplineId,
      weight:formData.weight,
      reps:formData.reps,
      memo:formData.memo
    }
    //登録処理
    this.recordWorkoutService.recordWorkout(workoutInfo).subscribe({
      next:(response)=>{
      },
      error:(error)=>{
        console.log(error);
        this.errorMessage=error
      }
    });
    sessionStorage.removeItem("bodyPartId");
    sessionStorage.removeItem("disciplineId");
    sessionStorage.removeItem("disciplineName");
    this.router.navigate(["/home/workout/selectBodyPart"]);
    
  }







}
