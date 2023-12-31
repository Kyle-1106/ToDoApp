import { Component} from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Workout, workoutInfo } from 'src/app/interfaces/workout.interface';
import { RecordWorkoutService } from 'src/app/services/recordWorkout/record-workout.service';

@Component({
  selector: 'app-record-workout',
  templateUrl: './record-workout.component.html',
  styleUrls: ['./record-workout.component.scss']
})
export class RecordWorkoutComponent {
  
  trainingDiscipline:string|null;
  workoutForm:FormGroup;
  workoutForms: FormGroup[] = [];
  weight:FormControl;
  reps:FormControl;
  memo:FormControl;
  errorMessage:string;

  constructor(
    private formBuilder:FormBuilder,
    private recordWorkoutService:RecordWorkoutService,
    private router:Router){
    this.errorMessage=""
  }
  
  ngOnInit(){
    this.trainingDiscipline=sessionStorage.getItem("disciplineName");
  }

  //フォーム追加
  addWorkoutForm() {
    const newForm = this.formBuilder.group({
      weight: new FormControl("", [Validators.required, Validators.min(1)]),
      reps: new FormControl("", [Validators.required, Validators.min(1)]),
      memo: new FormControl(""),
    });
    this.workoutForms.push(newForm);
  }

  //フォーム削除
  removeWorkoutForm(index: number) {
    if (this.workoutForms.length > 1) {
        this.workoutForms.splice(index, 1);
    }
  }
    

  //ワークアウト登録処理
  recordWorkout(){
    const userIdString:string|null=sessionStorage.getItem("id");
    const userId:number=Number(userIdString);
    const bodyPartIdString=sessionStorage.getItem("bodyPartId")
    const bodyPartId:number=Number(bodyPartIdString);
    const disciplineIdString=sessionStorage.getItem("disciplineId");
    const disciplineId=Number(disciplineIdString);

    for (const form of this.workoutForms){
      const formData=form.value;
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
        error:(error)=>{
          console.log(error);
          this.errorMessage=error
        }
      });
    }
    sessionStorage.removeItem("bodyPartId");
    sessionStorage.removeItem("disciplineId");
    sessionStorage.removeItem("disciplineName");
    this.router.navigate(["/home/workout/selectBodyPart"]);
  }







}
